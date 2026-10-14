import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import Assessment from "./Assessment";
import { assignAssessment, submitAssessment } from "../api/dashboard/data";

jest.mock("../api/dashboard/data", () => ({
  assignAssessment: jest.fn(),
  submitAssessment: jest.fn(),
}));

jest.mock("./Timer", () => ({
  __esModule: true,
  default: ({ onTimeUp }) => (
    <button type="button" onClick={onTimeUp}>
      Expire assessment
    </button>
  ),
}));

const optionValues = ["a", "b", "c", "d"];

function makeOptions(questionId, questionName) {
  return optionValues.map((value) => ({
    id: `${questionId}-option-${value}`,
    option: `${questionName} option ${value.toUpperCase()}`,
    value,
  }));
}

const questions = [
  {
    id: "question-one",
    question: "First question",
    options: makeOptions("question-one", "First"),
  },
  {
    id: "question-two",
    question: "Second question",
    options: makeOptions("question-two", "Second"),
  },
];

function callbacks() {
  return {
    setShowScore: jest.fn(),
    setScore: jest.fn(),
    setStatus: jest.fn(),
    setShowAssessment: jest.fn(),
  };
}

async function renderAssessment() {
  const result = { ...callbacks() };
  render(<Assessment {...result} />);
  await screen.findByText("1. First question");
  return result;
}

beforeEach(() => {
  jest.clearAllMocks();
  assignAssessment.mockResolvedValue({
    data: {
      data: {
        attemptId: "attempt-one",
        startedAt: "2026-10-14T10:00:00.000Z",
        expiresAt: "2026-10-14T10:05:00.000Z",
        test: { id: "test-one", time: 5, questions },
      },
    },
  });
});

test("sends answers in assessment question order", async () => {
  submitAssessment.mockResolvedValue({
    data: {
      message: "You passed!",
      data: { assessmentScore: 100 },
    },
  });
  await renderAssessment();

  fireEvent.click(screen.getByLabelText("Second option C"));
  fireEvent.click(screen.getByLabelText("First option B"));
  fireEvent.click(screen.getByRole("button", { name: "Submit" }));
  fireEvent.click(screen.getByRole("button", { name: "Proceed" }));

  await waitFor(() => {
    expect(submitAssessment.mock.calls[0][0].answers).toEqual(["b", "c"]);
  });
});

test("keeps a partial submission shorter than the assessment", async () => {
  submitAssessment.mockResolvedValue({
    data: {
      message: "You failed.",
      data: { assessmentScore: 0 },
    },
  });
  await renderAssessment();

  fireEvent.click(screen.getByLabelText("First option A"));
  fireEvent.click(screen.getByRole("button", { name: "Submit" }));
  fireEvent.click(screen.getByRole("button", { name: "Proceed" }));

  await waitFor(() => {
    expect(submitAssessment.mock.calls[0][0].answers).toEqual(["a"]);
  });
});

test("sends only one request while submission remains active", async () => {
  let resolveSubmission;
  submitAssessment.mockImplementation(
    () =>
      new Promise((resolve) => {
        resolveSubmission = resolve;
      })
  );
  await renderAssessment();

  fireEvent.click(screen.getByLabelText("First option A"));
  fireEvent.click(screen.getByRole("button", { name: "Submit" }));
  fireEvent.click(screen.getByRole("button", { name: "Proceed" }));
  await waitFor(() => expect(submitAssessment).toHaveBeenCalledTimes(1));

  fireEvent.click(screen.getByRole("button", { name: "Expire assessment" }));
  expect(submitAssessment).toHaveBeenCalledTimes(1);

  await act(async () => {
    resolveSubmission({
      data: {
        message: "You failed.",
        data: { assessmentScore: 0 },
      },
    });
    await Promise.resolve();
  });
});

test("shows a passed-attempt assignment rejection without starting the assessment", async () => {
  assignAssessment.mockRejectedValue({
    response: {
      status: 409,
      data: { code: "attempt_already_passed" },
    },
  });
  render(<Assessment {...callbacks()} />);

  expect(await screen.findByRole("alert")).toHaveTextContent(
    "You already passed this assessment. An administrator must reset your attempt."
  );
  expect(screen.queryByText("1. First question")).not.toBeInTheDocument();
  expect(screen.queryByRole("button", { name: "Expire assessment" })).not.toBeInTheDocument();
  expect(submitAssessment).not.toHaveBeenCalled();
});

test.each([
  { response: { data: { message: "Test not found" } } },
  new Error("Network Error"),
])("shows assignment failures rather than an empty assessment", async (error) => {
  assignAssessment.mockRejectedValue(error);
  render(<Assessment {...callbacks()} />);

  expect(await screen.findByRole("alert")).toHaveTextContent(
    error.response?.data.message || "Unable to load your assigned assessment."
  );
  expect(screen.queryByRole("button", { name: "Submit" })).not.toBeInTheDocument();
});

test("shows an error when a successful response has no assignment", async () => {
  assignAssessment.mockResolvedValue({
    data: { message: "Assignment created", data: null },
  });
  render(<Assessment {...callbacks()} />);

  expect(await screen.findByRole("alert")).toHaveTextContent(
    "Unable to load your assigned assessment."
  );
  expect(screen.queryByRole("button", { name: "Expire assessment" })).not.toBeInTheDocument();
});

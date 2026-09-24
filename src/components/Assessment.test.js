import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import Assessment from "./Assessment";
import { fetchAssessment, submitAssessment } from "../api/dashboard/data";

jest.mock("../api/dashboard/data", () => ({
  fetchAssessment: jest.fn(),
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
  return optionValues.map((value, index) => ({
    _id: `${questionId}-option-${value}`,
    option: `${questionName} option ${value.toUpperCase()}`,
    value,
  }));
}

const questions = [
  {
    _id: "question-one",
    question: "First question",
    options: makeOptions("question-one", "First"),
  },
  {
    _id: "question-two",
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

async function openConfirmation(optionLabel = "First option A") {
  fireEvent.click(screen.getByLabelText(optionLabel));
  fireEvent.click(screen.getByRole("button", { name: "Submit" }));
  fireEvent.click(screen.getByRole("button", { name: "Proceed" }));
}

beforeEach(() => {
  jest.clearAllMocks();
  fetchAssessment.mockResolvedValue({
    data: {
      data: [{ _id: "test-one", time: 5, questions }],
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
    expect(submitAssessment).toHaveBeenCalledWith(
      { answers: ["b", "c"] },
      "test-one"
    );
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
    expect(submitAssessment).toHaveBeenCalledWith(
      { answers: ["a"] },
      "test-one"
    );
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

test.each([
  ["You passed!", 75],
  ["You failed.", 0],
])("preserves the %s result message", async (message, assessmentScore) => {
  submitAssessment.mockResolvedValue({
    data: {
      message,
      data: { assessmentScore },
    },
  });
  const result = await renderAssessment();

  await openConfirmation();

  await waitFor(() => {
    expect(result.setStatus).toHaveBeenCalledWith(message);
    expect(result.setScore).toHaveBeenCalledWith(assessmentScore);
    expect(result.setShowScore).toHaveBeenCalledWith(true);
    expect(result.setShowAssessment).toHaveBeenCalledWith(false);
  });
});

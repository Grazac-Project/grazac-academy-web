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


const webcrypto = require("crypto").webcrypto;
const originalCrypto = Object.getOwnPropertyDescriptor(window, "crypto");

beforeAll(() => {
  Object.defineProperty(window, "crypto", {
    configurable: true,
    value: webcrypto,
  });
});

afterAll(() => {
  if (originalCrypto) {
    Object.defineProperty(window, "crypto", originalCrypto);
  } else {
    delete window.crypto;
  }
});

function submissionResponse(passed = true) {
  return {
    data: {
      success: true,
      message: passed ? "You passed!" : "You failed.",
      data: {
        attemptId: "attempt-one",
        assessmentScore: passed ? 100 : 0,
        status: "Pending",
        testStatus: passed ? "passed" : "failed",
        takenAssessment: passed,
        passMark: 60,
      },
    },
  };
}
const optionValues = ["a", "b", "c", "d"];

function makeOptions(questionId, questionName) {
  return optionValues.map((value) => ({
    id: `${questionId}-option-${value}`,
    option: `${questionName} option ${value.toUpperCase()}`,
    value,
    description: false,
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
      status: 200,
      message: "Test assigned successfully",
      data: {
        attemptId: "attempt-one",
        startedAt: "2026-10-14T10:00:00.000Z",
        expiresAt: "2026-10-14T10:05:00.000Z",
        test: {
          id: "test-one",
          time: 5,
          questions,
          createdAt: "2026-10-14T09:00:00.000Z",
          updatedAt: "2026-10-14T09:00:00.000Z",
        },
      },
    },
  });
});

test("sends answers in assessment question order", async () => {
  submitAssessment.mockResolvedValue(submissionResponse());
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
  submitAssessment.mockRejectedValue({
    response: {
      status: 409,
      data: {
        success: false,
        code: "incomplete",
        message: "Answer every question before you submit.",
        data: { expected: 2, received: 1 },
      },
    },
  });
  await renderAssessment();

  fireEvent.click(screen.getByLabelText("First option A"));
  fireEvent.click(screen.getByRole("button", { name: "Submit" }));
  fireEvent.click(screen.getByRole("button", { name: "Proceed" }));

  await waitFor(() => {
    expect(submitAssessment.mock.calls[0][0].answers).toEqual(["a"]);
  });
  expect(await screen.findByRole("alert")).toHaveTextContent(
    "Expected 2 answers; received 1."
  );
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
  fireEvent.click(screen.getByLabelText("Second option B"));
  fireEvent.click(screen.getByRole("button", { name: "Submit" }));
  fireEvent.click(screen.getByRole("button", { name: "Proceed" }));
  await waitFor(() => expect(submitAssessment).toHaveBeenCalledTimes(1));

  fireEvent.click(screen.getByRole("button", { name: "Expire assessment" }));
  expect(submitAssessment).toHaveBeenCalledTimes(1);

  await act(async () => {
    resolveSubmission(submissionResponse(false));
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

function confirmSubmission() {
  fireEvent.click(screen.getByRole("button", { name: "Submit" }));
  fireEvent.click(screen.getByRole("button", { name: "Proceed" }));
}

test("retries a lost submission response with the same payload and displays a replay only once", async () => {
  submitAssessment
    .mockRejectedValueOnce(new Error("Network Error"))
    .mockResolvedValue({
      ...submissionResponse(),
      headers: { "idempotent-replay": "true" },
    });
  const result = await renderAssessment();
  fireEvent.click(screen.getByLabelText("First option B"));
  fireEvent.click(screen.getByLabelText("Second option C"));
  confirmSubmission();

  expect(await screen.findByRole("alert")).toHaveTextContent(
    "Unable to submit your assessment. Please try again."
  );
  expect(screen.getByLabelText("First option B")).toBeChecked();
  expect(result.setShowScore).not.toHaveBeenCalled();
  const firstPayload = submitAssessment.mock.calls[0][0];
  expect(firstPayload).toEqual({
    answers: ["b", "c"],
    idempotencyKey: expect.stringMatching(/^[0-9a-f]{32}$/),
  });

  confirmSubmission();
  await waitFor(() => expect(result.setShowScore).toHaveBeenCalledTimes(1));
  expect(submitAssessment.mock.calls[1][0]).toBe(firstPayload);
  expect(result.setScore).toHaveBeenLastCalledWith(100);
  expect(result.setStatus).toHaveBeenLastCalledWith("You passed!");

  fireEvent.click(screen.getByRole("button", { name: "Expire assessment" }));
  expect(submitAssessment).toHaveBeenCalledTimes(2);
  expect(result.setShowScore).toHaveBeenCalledTimes(1);
});

test("keeps incomplete answers selected and creates a new submission key when answers change", async () => {
  submitAssessment
    .mockRejectedValueOnce({
      response: {
        status: 409,
        data: {
          success: false,
          code: "incomplete",
          message: "Answer every question before you submit.",
          data: { expected: 2, received: 1 },
        },
      },
    })
    .mockResolvedValue(submissionResponse());
  const result = await renderAssessment();
  fireEvent.click(screen.getByLabelText("First option B"));
  confirmSubmission();

  expect(await screen.findByRole("alert")).toHaveTextContent(
    "Expected 2 answers; received 1."
  );
  expect(screen.getByLabelText("First option B")).toBeChecked();
  expect(result.setShowScore).not.toHaveBeenCalled();
  const firstPayload = submitAssessment.mock.calls[0][0];

  fireEvent.click(screen.getByLabelText("Second option C"));
  confirmSubmission();
  await waitFor(() => expect(result.setShowScore).toHaveBeenCalledTimes(1));
  const secondPayload = submitAssessment.mock.calls[1][0];
  expect(secondPayload.answers).toEqual(["b", "c"]);
  expect(secondPayload.idempotencyKey).not.toBe(firstPayload.idempotencyKey);
});

test.each([
  ["no_active_attempt", "No active assessment attempt. Please reopen the assessment."],
  ["payment_option_required", "Choose a payment option before you submit the assessment."],
])("shows %s without discarding selected answers or displaying success", async (code, message) => {
  submitAssessment.mockRejectedValue({
    response: {
      status: code === "no_active_attempt" ? 409 : 422,
      data: {
        success: false,
        code,
        message: code === "no_active_attempt"
          ? "Start an assessment before you submit answers."
          : "Choose a payment option before you submit the assessment.",
      },
    },
  });
  const result = await renderAssessment();
  fireEvent.click(screen.getByLabelText("First option A"));
  confirmSubmission();

  expect(await screen.findByRole("alert")).toHaveTextContent(message);
  expect(screen.getByLabelText("First option A")).toBeChecked();
  expect(result.setShowScore).not.toHaveBeenCalled();
  expect(screen.getByRole("button", { name: "Submit" })).not.toBeDisabled();
});

test("expiry still submits during confirmation and displays the server's expired-attempt response", async () => {
  submitAssessment.mockRejectedValue({
    response: {
      status: 409,
      data: {
        success: false,
        code: "no_active_attempt",
        message: "Start an assessment before you submit answers.",
      },
    },
  });
  const result = await renderAssessment();
  fireEvent.click(screen.getByLabelText("First option A"));
  fireEvent.click(screen.getByRole("button", { name: "Submit" }));
  expect(screen.getByRole("button", { name: "Proceed" })).toBeInTheDocument();

  fireEvent.click(screen.getByText("Expire assessment"));
  expect(await screen.findByRole("alert")).toHaveTextContent(
    "Assessment time has expired. The server did not accept this submission because the attempt is no longer active."
  );
  expect(submitAssessment.mock.calls[0][0].answers).toEqual(["a"]);
  expect(screen.getByLabelText("First option A")).toBeChecked();
  expect(screen.queryByRole("button", { name: "Proceed" })).not.toBeInTheDocument();
  expect(result.setShowScore).not.toHaveBeenCalled();
  expect(screen.getByLabelText("First option A")).toBeDisabled();
  expect(screen.getByLabelText("Second option B")).toBeDisabled();
  expect(screen.queryByRole("button", { name: "Submit" })).not.toBeInTheDocument();
  expect(screen.queryByRole("button", { name: "Retry submission" })).not.toBeInTheDocument();
  fireEvent.click(screen.getByText("Expire assessment"));
  expect(submitAssessment).toHaveBeenCalledTimes(1);
});

test("a lost pre-deadline response can replay its exact payload after expiry while answers stay locked", async () => {
  let rejectSubmission;
  submitAssessment
    .mockImplementationOnce(() => new Promise((resolve, reject) => {
      rejectSubmission = reject;
    }))
    .mockResolvedValue({
      ...submissionResponse(),
      headers: { "idempotent-replay": "true" },
    });
  const result = await renderAssessment();
  fireEvent.click(screen.getByLabelText("First option B"));
  fireEvent.click(screen.getByLabelText("Second option C"));
  confirmSubmission();
  await waitFor(() => expect(submitAssessment).toHaveBeenCalledTimes(1));
  const originalPayload = submitAssessment.mock.calls[0][0];
  expect(screen.getByLabelText("First option B")).toBeDisabled();

  fireEvent.click(screen.getByText("Expire assessment"));
  expect(submitAssessment).toHaveBeenCalledTimes(1);
  await act(async () => {
    rejectSubmission(new Error("Network Error"));
    await Promise.resolve();
  });
  const retry = await screen.findByRole("button", { name: "Retry submission" });
  expect(screen.getByLabelText("First option B")).toBeChecked();
  expect(screen.getByLabelText("Second option C")).toBeDisabled();
  expect(screen.queryByRole("button", { name: "Submit" })).not.toBeInTheDocument();
  expect(result.setShowScore).not.toHaveBeenCalled();

  fireEvent.click(retry);
  await waitFor(() => expect(result.setShowScore).toHaveBeenCalledTimes(1));
  expect(submitAssessment.mock.calls[1][0]).toBe(originalPayload);
  expect(result.setScore).toHaveBeenLastCalledWith(100);
  expect(screen.queryByRole("button", { name: "Retry submission" })).not.toBeInTheDocument();
  fireEvent.click(screen.getByText("Expire assessment"));
  expect(submitAssessment).toHaveBeenCalledTimes(2);
});

test.each([
  {
    code: "incomplete",
    message: "Answer every question before you submit.",
    data: { expected: 2, received: 1 },
  },
  {
    code: "payment_option_required",
    message: "Choose a payment option before you submit the assessment.",
  },
])("does not offer expiry retries after a known $code rejection", async (response) => {
  submitAssessment.mockRejectedValue({
    response: { status: response.code === "incomplete" ? 409 : 422, data: response },
  });
  const result = await renderAssessment();
  fireEvent.click(screen.getByLabelText("First option A"));
  fireEvent.click(screen.getByText("Expire assessment"));

  await waitFor(() => expect(screen.getByRole("alert")).toHaveTextContent(
    response.code === "incomplete"
      ? "The server rejected an incomplete submission."
      : "The server requires a payment option and did not accept this submission."
  ));
  await waitFor(() => expect(submitAssessment).toHaveBeenCalledTimes(1));
  expect(screen.getByLabelText("First option A")).toBeDisabled();
  expect(screen.queryByRole("button", { name: "Retry submission" })).not.toBeInTheDocument();
  expect(screen.queryByRole("button", { name: "Submit" })).not.toBeInTheDocument();
  expect(result.setShowScore).not.toHaveBeenCalled();
});

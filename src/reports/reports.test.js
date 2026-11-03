import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route } from "react-router-dom";
import ReportsApp from "./ReportsApp";
import * as api from "../api/adminAnalytics";
import { ApiError } from "../api/client";

jest.mock("../api/adminAnalytics");

const overview = {
  range: { from: "2026-10-04T00:00:00.000Z", to: "2026-11-03T23:59:59.999Z" },
  totalLearners: 120,
  activeLearners: 45,
  newLearners: 12,
  totalCourses: { published: 6, unpublished: 2 },
  totalEnrollments: 300,
  newEnrollments: 30,
  completedEnrollments: 75,
  completionsInRange: 9,
  completionRate: 0.25,
  certificatesIssued: 70,
  assessments: { passed: 40, failed: 8, pending: 3, averagePercentage: 72.4 },
  dataFreshness: {
    courses: { lastSuccessAt: "2026-11-03T08:00:00.000Z", lastStatus: "success" },
    learners: { lastSuccessAt: "2026-11-03T09:00:00.000Z", lastStatus: "success" },
  },
};

const SESSION = "gz-reports-session";
const signedIn = (token = "k") => sessionStorage.setItem(SESSION, JSON.stringify({ token, email: "staff@example.com" }));

const renderReports = (url = "/reports") =>
  render(
    <MemoryRouter initialEntries={[url]}>
      <Route path="/reports" component={ReportsApp} />
    </MemoryRouter>
  );

const signIn = (email, password) => {
  userEvent.clear(screen.getByLabelText(/email/i));
  userEvent.type(screen.getByLabelText(/email/i), email);
  userEvent.type(screen.getByLabelText(/password/i), password);
  userEvent.click(screen.getByRole("button", { name: /sign in/i }));
};

beforeEach(() => {
  jest.resetAllMocks();
  sessionStorage.clear();
});

test("signs in with email and password and keeps only the token", async () => {
  api.login.mockRejectedValueOnce(new ApiError("Invalid email or password", { status: 401 }));
  renderReports();
  signIn("staff@example.com", "wrong-password");
  expect(await screen.findByText(/incorrect email or password/i)).toBeInTheDocument();
  expect(sessionStorage.getItem(SESSION)).toBeNull();
  expect(screen.getByLabelText(/password/i)).toHaveValue("");

  api.login.mockResolvedValueOnce({ token: "tok-1", tokenType: "Bearer", expiresIn: "2h", admin: { email: "staff@example.com" } });
  api.getOverview.mockResolvedValue(overview);
  signIn("staff@example.com", "right-password");
  expect(await screen.findByText("120")).toBeInTheDocument();
  expect(api.login).toHaveBeenLastCalledWith({ email: "staff@example.com", password: "right-password" });
  expect(api.getOverview).toHaveBeenCalledWith("tok-1", expect.objectContaining({ from: expect.any(String), to: expect.any(String) }), expect.anything());
  expect(JSON.parse(sessionStorage.getItem(SESSION))).toEqual({ token: "tok-1", email: "staff@example.com" });
  expect(sessionStorage.getItem(SESSION)).not.toMatch(/password/);
  expect(screen.getByText("25%")).toBeInTheDocument();
  expect(screen.getByText("72.4%")).toBeInTheDocument();
});

test("explains a locked account", async () => {
  api.login.mockRejectedValueOnce(new ApiError("Too many failed attempts", { status: 423 }));
  renderReports();
  signIn("staff@example.com", "pw");
  expect(await screen.findByText(/locked for 15 minutes/i)).toBeInTheDocument();
});

test("signs out when the backend later rejects the token", async () => {
  signedIn("expired");
  api.getOverview.mockRejectedValue(new ApiError("Unauthorized", { status: 401 }));
  renderReports();
  expect(await screen.findByText(/session has ended/i)).toBeInTheDocument();
  expect(sessionStorage.getItem(SESSION)).toBeNull();
});

test("a date preset refetches the overview for that range", async () => {
  signedIn();
  api.getOverview.mockResolvedValue(overview);
  renderReports();
  await screen.findByText("120");
  userEvent.click(screen.getByRole("button", { name: "Last 7 days" }));
  const lastRange = () => api.getOverview.mock.calls[api.getOverview.mock.calls.length - 1][1];
  await waitFor(() => expect((new Date(lastRange().to) - new Date(lastRange().from)) / 86400000).toBe(7));
});

test("shows an error with retry when a report fails", async () => {
  signedIn();
  api.getOverview.mockRejectedValueOnce(new ApiError("Error processing request", { status: 500 }));
  api.getOverview.mockResolvedValueOnce(overview);
  renderReports();
  userEvent.click(await screen.findByRole("button", { name: /try again/i }));
  expect(await screen.findByText("120")).toBeInTheDocument();
});

test("course performance sorts and searches", async () => {
  signedIn();
  api.getCourseStats.mockResolvedValue([
    { trainerCentralCourseId: "1", slug: "a", title: "Alpha", published: true, enrollments: 5, distinctLearners: 5, completedEnrollments: 1, completionRate: 0.2, averageCompletionPercentage: 40, certificatesIssued: 1, enrolledCountReportedByTrainerCentral: 5 },
    { trainerCentralCourseId: "2", slug: "b", title: "Beta", published: false, enrollments: 9, distinctLearners: 8, completedEnrollments: 3, completionRate: 1 / 3, averageCompletionPercentage: 55, certificatesIssued: 3, enrolledCountReportedByTrainerCentral: 9 },
  ]);
  renderReports("/reports/courses");
  const rows = await screen.findAllByRole("row");
  expect(rows[1]).toHaveTextContent("Beta"); // most enrolments first
  userEvent.type(screen.getByLabelText(/search/i), "alp");
  expect(screen.queryByText("Beta")).toBeNull();
  expect(screen.getByText("Alpha")).toBeInTheDocument();
});

test("learners are paged by the server", async () => {
  signedIn();
  api.getCourseStats.mockResolvedValue([]);
  api.getLearners.mockImplementation((key, params) =>
    Promise.resolve({
      items: [
        {
          orgMemberId: `m${params.page}`,
          name: `Learner on page ${params.page}`,
          email: "l@example.com",
          status: 1,
          signedUpAt: null,
          lastLoginAt: null,
          enrollments: [{ trainerCentralCourseId: "1", courseTitle: "Alpha", status: 50, completionPercentage: 100, completedAt: "2026-10-01T00:00:00Z", certificateIssued: true }],
        },
      ],
      pagination: { page: params.page, limit: 20, total: 40, totalPages: 2 },
    })
  );
  renderReports("/reports/learners");
  expect(await screen.findByText("Learner on page 1")).toBeInTheDocument();
  expect(screen.getByText("1 of 1 completed")).toBeInTheDocument();
  userEvent.click(screen.getByRole("button", { name: /next/i }));
  expect(await screen.findByText("Learner on page 2")).toBeInTheDocument();
});

test("CSV export downloads the backend's file", async () => {
  signedIn();
  api.getOverview.mockResolvedValue(overview);
  api.exportCsv.mockResolvedValue({ blob: new Blob(["a,b"]), filename: "trainercentral-enrollments.csv" });
  URL.createObjectURL = jest.fn(() => "blob:mock");
  URL.revokeObjectURL = jest.fn();
  const click = jest.spyOn(HTMLAnchorElement.prototype, "click").mockImplementation(() => {});
  renderReports();
  userEvent.click(await screen.findByRole("button", { name: /export enrolments/i }));
  await screen.findByRole("button", { name: /export enrolments/i });
  expect(api.exportCsv).toHaveBeenCalledWith("k", "enrollments");
  await new Promise((r) => setTimeout(r, 0));
  expect(click).toHaveBeenCalled();
  click.mockRestore();
});

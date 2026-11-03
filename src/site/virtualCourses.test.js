import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route } from "react-router-dom";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import { listVirtualCourses, getVirtualCourse } from "../api/virtualCourses";
import { ApiError } from "../api/client";

jest.mock("../api/virtualCourses", () => ({
  MAX_PAGE_SIZE: 50,
  listVirtualCourses: jest.fn(),
  getVirtualCourse: jest.fn(),
}));

// Shaped like the backend's PublicCourse (openapi.yaml).
const course = (overrides = {}) => ({
  id: "c1",
  trainerCentralCourseId: "1655448000000021227",
  slug: "become-a-pentester",
  title: "Become a Pentester",
  description: "Learn penetration testing.\n\nHands-on labs.",
  descriptionHtml: "<p>Learn <b>penetration</b> testing.</p>",
  thumbnailUrl: null,
  categories: ["Cloud & Security"],
  duration: null,
  price: 50000,
  currency: "NGN",
  isPaid: true,
  enrollmentUrl: "https://learn.grazacacademy.com/course/become-a-pentester",
  isFeatured: false,
  lastSyncedAt: "2026-11-03T08:00:00.000Z",
  ...overrides,
});

const page = (items, extra = {}) =>
  Promise.resolve({ items, pagination: { page: 1, limit: 50, total: items.length, totalPages: 1, ...extra } });

const renderAt = (url, Component) =>
  render(
    <MemoryRouter initialEntries={[url]}>
      <Route path="/" component={Component} />
    </MemoryRouter>
  );

beforeAll(() => {
  window.scrollTo = jest.fn();
});
beforeEach(() => jest.resetAllMocks());

describe("virtual course catalogue", () => {
  it("shows skeletons, then cards with price and a verified Enrol link", async () => {
    listVirtualCourses.mockReturnValue(page([course()]));
    const { container } = renderAt("/courses?mode=virtual", Courses);
    expect(container.querySelector(".gz-skeleton")).toBeInTheDocument();

    const title = await screen.findByRole("link", { name: "Become a Pentester" });
    const card = title.closest("article");
    expect(within(card).getByText("₦50,000")).toBeInTheDocument();
    expect(within(card).getByRole("link", { name: /enrol now/i })).toHaveAttribute(
      "href",
      "https://learn.grazacacademy.com/course/become-a-pentester"
    );
    expect(within(card).getByRole("link", { name: /view details/i })).toHaveAttribute(
      "href",
      "/course-detail-graduate?course=become-a-pentester&mode=virtual"
    );
  });

  it("never renders an unapproved or missing enrolment link", async () => {
    listVirtualCourses.mockReturnValue(
      page([
        course({ id: "a", slug: "a", title: "Bad host", enrollmentUrl: "https://evil.example.com/x" }),
        course({ id: "b", slug: "b", title: "Plain http", enrollmentUrl: "http://learn.grazacacademy.com/x" }),
        course({ id: "c", slug: "c", title: "No link", enrollmentUrl: null }),
      ])
    );
    renderAt("/courses?mode=virtual", Courses);
    await screen.findByText("Bad host");
    expect(screen.queryByRole("link", { name: /enrol now/i })).toBeNull();
    expect(screen.getAllByText("Enrolment opening soon")).toHaveLength(3);
  });

  it("shows Free for free courses and hides prices it doesn't have", async () => {
    listVirtualCourses.mockReturnValue(
      page([
        course({ id: "f", slug: "f", title: "Free one", price: 0, currency: null, isPaid: false }),
        course({ id: "u", slug: "u", title: "Unknown price", price: null, currency: null }),
      ])
    );
    renderAt("/courses?mode=virtual", Courses);
    const free = (await screen.findByText("Free one")).closest("article");
    expect(within(free).getByText("Free")).toBeInTheDocument();
    const unknown = screen.getByText("Unknown price").closest("article");
    expect(unknown.querySelector(".gz-price")).toBeNull();
  });

  it("removes duplicate courses", async () => {
    listVirtualCourses.mockReturnValue(page([course(), course()]));
    renderAt("/courses?mode=virtual", Courses);
    expect(await screen.findAllByRole("link", { name: "Become a Pentester" })).toHaveLength(1);
  });

  it("offers a retry when the API fails", async () => {
    listVirtualCourses.mockReturnValueOnce(Promise.reject(new ApiError("down", { status: 503 })));
    listVirtualCourses.mockReturnValueOnce(page([course()]));
    renderAt("/courses?mode=virtual", Courses);
    userEvent.click(await screen.findByRole("button", { name: /try again/i }));
    expect(await screen.findByRole("link", { name: "Become a Pentester" })).toBeInTheDocument();
  });

  it("hides category filters that would show no courses", async () => {
    listVirtualCourses.mockReturnValue(page([course({ categories: [] })]));
    const { container } = renderAt("/courses?mode=virtual", Courses);
    await screen.findByRole("link", { name: "Become a Pentester" });
    expect(container.querySelector(".gz-catalog__cats")).not.toBeVisible();
  });

  it("has an empty state", async () => {
    listVirtualCourses.mockReturnValue(page([]));
    renderAt("/courses?mode=virtual", Courses);
    expect(await screen.findByText(/no virtual courses are open/i)).toBeInTheDocument();
  });

  it("keeps physical courses when virtual courses fail", async () => {
    listVirtualCourses.mockReturnValue(Promise.reject(new ApiError("down", { status: 503 })));
    renderAt("/courses", Courses);
    expect(await screen.findByText(/virtual courses couldn't be loaded/i)).toBeInTheDocument();
    expect(screen.getByText("AI Automation Bootcamp")).toBeInTheDocument();
  });

  it("loads more pages on request", async () => {
    listVirtualCourses
      .mockReturnValueOnce(page([course()], { total: 2, totalPages: 2 }))
      .mockReturnValueOnce(
        Promise.resolve({
          items: [course({ id: "c2", slug: "second", title: "Second course" })],
          pagination: { page: 2, limit: 50, total: 2, totalPages: 2 },
        })
      );
    renderAt("/courses?mode=virtual", Courses);
    userEvent.click(await screen.findByRole("button", { name: /show more virtual courses/i }));
    expect(await screen.findByText("Second course")).toBeInTheDocument();
    expect(listVirtualCourses).toHaveBeenLastCalledWith({ page: 2, limit: 50, category: undefined });
  });
});

describe("virtual course details", () => {
  it("renders backend data as plain text, never the raw HTML", async () => {
    getVirtualCourse.mockReturnValue(Promise.resolve(course()));
    listVirtualCourses.mockReturnValue(page([]));
    const { container } = renderAt("/course-detail-graduate?course=become-a-pentester&mode=virtual", CourseDetail);
    expect(await screen.findByRole("heading", { level: 1, name: "Become a Pentester" })).toBeInTheDocument();
    expect(screen.getByText("Hands-on labs.")).toBeInTheDocument();
    expect(container.querySelector("b")).toBeNull();
    expect(screen.getAllByRole("link", { name: /enrol now/i })[0]).toHaveAttribute(
      "href",
      "https://learn.grazacacademy.com/course/become-a-pentester"
    );
    expect(document.title).toBe("Become a Pentester | Grazac Academy");
  });

  it("always sets a meta description, even without a course description", async () => {
    document.head.innerHTML = '<meta name="description" content="previous page">';
    getVirtualCourse.mockReturnValue(Promise.resolve(course({ description: null })));
    listVirtualCourses.mockReturnValue(page([]));
    renderAt("/course-detail-graduate?course=become-a-pentester&mode=virtual", CourseDetail);
    await screen.findByRole("heading", { level: 1, name: "Become a Pentester" });
    expect(document.querySelector('meta[name="description"]').content).toMatch(/^Become a Pentester: an online course/);
  });

  it("shows outcomes, curriculum in order and instructors, skipping unsafe photos", async () => {
    getVirtualCourse.mockReturnValue(
      Promise.resolve(
        course({
          outcomes: ["Run a penetration test"],
          curriculum: [
            { name: "Second lesson", type: "live", sectionId: null, order: 1 },
            { name: "First lesson", type: "on-demand", sectionId: null, order: 0 },
          ],
          instructors: [{ name: "Ada Obi", title: "Security lead", bio: null, photoUrl: "http://insecure.example/p.jpg" }],
        })
      )
    );
    listVirtualCourses.mockReturnValue(page([]));
    const { container } = renderAt("/course-detail-graduate?course=become-a-pentester&mode=virtual", CourseDetail);
    expect(await screen.findByText("Run a penetration test")).toBeInTheDocument();
    const lessons = [...container.querySelectorAll(".gz-module h3")].map((h) => h.textContent);
    expect(lessons).toEqual(["First lesson", "Second lesson"]);
    expect(screen.getByText("Live session")).toBeInTheDocument();
    expect(screen.getByText("Ada Obi")).toBeInTheDocument();
    expect(container.querySelector('img[src^="http://"]')).toBeNull();
  });

  it("keeps old virtual course URLs working when the course isn't in TrainerCentral", async () => {
    getVirtualCourse.mockReturnValue(Promise.reject(new ApiError("Course not found", { status: 404 })));
    renderAt("/course-detail-graduate?course=frontend-web-development", CourseDetail);
    expect(await screen.findByText(/enrolment for this course isn't open/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Front End Web Development");
    expect(getVirtualCourse).toHaveBeenCalledWith("frontend-web-development", expect.anything());
  });

  it("leaves physical courses on the existing page", () => {
    global.fetch = jest.fn(() => new Promise(() => {}));
    renderAt("/course-detail-graduate?course=cybersecurity", CourseDetail);
    expect(getVirtualCourse).not.toHaveBeenCalled();
    expect(screen.getAllByRole("link", { name: /apply now/i }).length).toBeGreaterThan(0);
    delete global.fetch;
  });
});

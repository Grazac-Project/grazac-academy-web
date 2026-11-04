import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Apply from "./pages/Apply";
import Courses from "./pages/Courses";
import { listVirtualCourses } from "../api/virtualCourses";

jest.mock("../api/virtualCourses", () => ({
  MAX_PAGE_SIZE: 50,
  listVirtualCourses: jest.fn(),
  getVirtualCourse: jest.fn(),
}));

const course = (overrides = {}) => ({
  id: "c1",
  slug: "become-a-pentester",
  title: "Become a Pentester",
  description: "",
  categories: [],
  price: 50000,
  currency: "NGN",
  isPaid: true,
  enrollmentUrl: "https://learn.grazacacademy.com/course/become-a-pentester",
  ...overrides,
});

const page = (items) =>
  Promise.resolve({ items, pagination: { page: 1, limit: 50, total: items.length, totalPages: 1 } });

let location;
const renderAt = (url, Component) =>
  render(
    <MemoryRouter initialEntries={[url]}>
      <Route path="/" component={Component} />
      <Route
        path="*"
        render={({ location: l }) => {
          location = l;
          return null;
        }}
      />
    </MemoryRouter>
  );

const heroApply = () =>
  screen.getAllByRole("link", { name: /apply now/i }).find((a) => a.className.includes("gz-btn--lg"));

beforeAll(() => {
  window.scrollTo = jest.fn();
  window.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});
beforeEach(() => {
  jest.resetAllMocks();
  localStorage.clear();
  listVirtualCourses.mockReturnValue(page([course(), course({ id: "c2", slug: "b", price: 30000 })]));
});

describe("Apply chooser", () => {
  it("opens a dialog instead of going to sign-up, and the link still points at /apply", async () => {
    renderAt("/", Home);
    const apply = heroApply();
    expect(apply).toHaveAttribute("href", "/apply");
    userEvent.click(apply);
    const dialog = screen.getByRole("dialog", { name: /how would you like to learn/i });
    expect(location.pathname).toBe("/");
    expect(within(dialog).getByRole("link", { name: /learn online/i })).toHaveAttribute(
      "href",
      "/courses?mode=virtual"
    );
    expect(within(dialog).getByRole("link", { name: /learn in abeokuta/i })).toHaveAttribute("href", "/signup");
    expect(await within(dialog).findByText("2 courses open · from ₦30,000")).toBeInTheDocument();
  });

  it("goes to the virtual catalogue or sign-up, and remembers the choice", () => {
    renderAt("/", Home);
    userEvent.click(heroApply());
    userEvent.click(within(screen.getByRole("dialog")).getByRole("link", { name: /learn in abeokuta/i }));
    expect(location.pathname).toBe("/signup");
    expect(screen.queryByRole("dialog")).toBeNull();
    expect(localStorage.getItem("gz-apply-choice")).toBe("onsite");
  });

  it("highlights the last choice next time", async () => {
    localStorage.setItem("gz-apply-choice", "virtual");
    renderAt("/", Home);
    userEvent.click(heroApply());
    const online = within(screen.getByRole("dialog")).getByRole("link", { name: /learn online/i });
    expect(within(online).getByText("Your last choice")).toBeInTheDocument();
    await waitFor(() => expect(online).toHaveFocus());
  });

  it("closes on Escape and gives focus back to the button", async () => {
    renderAt("/", Home);
    const apply = heroApply();
    userEvent.click(apply);
    await waitFor(() => expect(apply).not.toHaveFocus());
    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("dialog")).toBeNull();
    await waitFor(() => expect(apply).toHaveFocus());
  });

  it("mentions free courses when there are some", async () => {
    listVirtualCourses.mockReturnValue(page([course({ price: 0, isPaid: false, currency: null })]));
    renderAt("/apply", Apply);
    expect(await screen.findByText("1 course open · some are free")).toBeInTheDocument();
  });

  it("asks which course before logging in", () => {
    renderAt("/", Home);
    userEvent.click(screen.getAllByRole("button", { name: /log in/i })[0]);
    const dialog = screen.getByRole("dialog", { name: /which course are you on/i });
    expect(within(dialog).getByRole("link", { name: /virtual course/i })).toHaveAttribute(
      "href",
      "https://learn.grazacacademy.com"
    );
    userEvent.click(within(dialog).getByRole("link", { name: /physical cohort/i }));
    expect(location.pathname).toBe("/login");
    expect(localStorage.getItem("gz-login-choice")).toBe("onsite");
  });

  it("skips the question on the physical courses list", () => {
    renderAt("/courses?mode=onsite", Courses);
    const band = screen.getByText(/can't decide between two courses/i).closest("section");
    expect(within(band).getByRole("link", { name: /apply now/i })).toHaveAttribute("href", "/signup");
  });
});

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

// Polls instead of findBy*: @testing-library/react 11 doesn't notice
// React 18 resolving a lazy route outside act().
const eventually = async (query, timeout = 15000) => {
  const end = Date.now() + timeout;
  while (Date.now() < end) {
    const el = query();
    if (el) return el;
    await new Promise((r) => setTimeout(r, 100));
  }
  return null;
};

// Route-level smoke test: the reports dashboard is reachable and asks for a
// key before showing anything.
test("/reports shows the staff sign-in", async () => {
  window.scrollTo = jest.fn();
  render(
    <MemoryRouter initialEntries={["/reports"]}>
      <App />
    </MemoryRouter>
  );
  expect(await eventually(() => screen.queryByLabelText(/password/i))).toBeInTheDocument();
}, 20000);

import { act, render, screen } from "@testing-library/react";
import Timer from "./Timer";

const startedAt = Date.parse("2026-10-14T10:00:00.000Z");
let now;
let clock;

beforeEach(() => {
  jest.useFakeTimers();
  now = startedAt;
  clock = jest.spyOn(Date, "now").mockImplementation(() => now);
});

afterEach(() => {
  clock.mockRestore();
  jest.useRealTimers();
  sessionStorage.clear();
});

test("reopening uses the same server deadline instead of a full duration or cached countdown", () => {
  const expiresAt = new Date(startedAt + 120000).toISOString();
  sessionStorage.setItem("time_left", "9999");
  const first = render(<Timer expiresAt={expiresAt} onTimeUp={jest.fn()} />);
  expect(screen.getByText("02:00")).toBeInTheDocument();
  first.unmount();

  now += 45000;
  render(<Timer expiresAt={expiresAt} onTimeUp={jest.fn()} />);
  expect(screen.getByText("01:15")).toBeInTheDocument();
});

test("a delayed tick catches up to wall clock time instead of decrementing by one", () => {
  render(
    <Timer
      expiresAt={new Date(startedAt + 120000).toISOString()}
      onTimeUp={jest.fn()}
    />
  );

  act(() => {
    now += 65000;
    jest.advanceTimersByTime(1000);
  });
  expect(screen.getByText("00:55")).toBeInTheDocument();
});

test("expiry invokes the latest callback once despite callback changes and later ticks", () => {
  const expiresAt = new Date(startedAt + 2000).toISOString();
  const firstCallback = jest.fn();
  const latestCallback = jest.fn();
  const view = render(<Timer expiresAt={expiresAt} onTimeUp={firstCallback} />);
  view.rerender(<Timer expiresAt={expiresAt} onTimeUp={latestCallback} />);

  act(() => {
    now += 3000;
    jest.advanceTimersByTime(1000);
  });
  expect(screen.getByText("00:00")).toBeInTheDocument();
  expect(firstCallback).not.toHaveBeenCalled();
  expect(latestCallback).toHaveBeenCalledTimes(1);

  view.rerender(<Timer expiresAt={expiresAt} onTimeUp={jest.fn()} />);
  act(() => jest.advanceTimersByTime(10000));
  expect(latestCallback).toHaveBeenCalledTimes(1);
});

test("an already expired assignment reports expiry once without displaying negative time", () => {
  const expiresAt = new Date(startedAt - 1000).toISOString();
  const onTimeUp = jest.fn();
  const view = render(<Timer expiresAt={expiresAt} onTimeUp={onTimeUp} />);
  expect(screen.getByText("00:00")).toBeInTheDocument();
  expect(onTimeUp).toHaveBeenCalledTimes(1);

  view.rerender(<Timer expiresAt={expiresAt} onTimeUp={onTimeUp} />);
  act(() => jest.advanceTimersByTime(5000));
  expect(onTimeUp).toHaveBeenCalledTimes(1);
});

import { excerpt, formatPrice, paragraphs, safeEnrollmentUrl, uniqueById } from "./courseFormat";

const hosts = ["learn.grazacacademy.com", "grazac-academy.trainercentralsite.com"];

describe("safeEnrollmentUrl", () => {
  it("returns approved https URLs unchanged", () => {
    const url = "https://learn.grazacacademy.com/course/abc?ref=site";
    expect(safeEnrollmentUrl(url, hosts)).toBe(url);
    expect(safeEnrollmentUrl("https://grazac-academy.trainercentralsite.com/course/abc", hosts)).toBe(
      "https://grazac-academy.trainercentralsite.com/course/abc"
    );
  });

  it.each([
    ["missing", null],
    ["empty", ""],
    ["not a URL", "learn.grazacacademy.com/course/abc"],
    ["http", "http://learn.grazacacademy.com/course/abc"],
    ["other host", "https://evil.example.com/course/abc"],
    ["lookalike host", "https://learn.grazacacademy.com.evil.example/course"],
    ["credentials", "https://user:pass@learn.grazacacademy.com/course"],
    ["javascript", "javascript:alert(1)"],
  ])("rejects %s", (_, url) => {
    expect(safeEnrollmentUrl(url, hosts)).toBeNull();
  });
});

describe("formatPrice", () => {
  it("shows Free for free courses", () => {
    expect(formatPrice({ price: 0, currency: null, isPaid: false })).toBe("Free");
  });
  it("formats paid prices in their currency", () => {
    expect(formatPrice({ price: 50000, currency: "NGN", isPaid: true })).toMatch(/50,000/);
  });
  it("shows nothing when the price is unknown", () => {
    expect(formatPrice({ price: null, currency: null, isPaid: true })).toBeNull();
    expect(formatPrice({ price: 50000, currency: null, isPaid: true })).toBeNull();
  });
});

describe("text helpers", () => {
  it("splits paragraphs on blank lines", () => {
    expect(paragraphs("One.\n\nTwo.\n \nThree.")).toEqual(["One.", "Two.", "Three."]);
  });
  it("shortens long text at a word boundary", () => {
    const out = excerpt("word ".repeat(100), 50);
    expect(out.length).toBeLessThanOrEqual(51);
    expect(out.endsWith("…")).toBe(true);
  });
  it("removes duplicate courses by id", () => {
    expect(uniqueById([{ id: "a" }, { id: "b" }, { id: "a" }]).map((c) => c.id)).toEqual(["a", "b"]);
  });
});

const jsonResponse = (status, body) => ({
  ok: status >= 200 && status < 300,
  status,
  headers: { get: (h) => (h.toLowerCase() === "content-type" ? "application/json" : null) },
  json: async () => body,
});

const load = () => {
  jest.resetModules();
  process.env.REACT_APP_API_BASE_URL = "https://api.example.test/";
  process.env.REACT_APP_USE_MOCKS = "false";
  return require("./client");
};

afterEach(() => {
  delete global.fetch;
});

test("unwraps the backend envelope and builds the URL", async () => {
  const { request } = load();
  global.fetch = jest.fn().mockResolvedValue(jsonResponse(200, { status: 200, message: "ok", data: { items: [] } }));
  await expect(request("/virtual-courses", { params: { page: 2, search: "", category: undefined } })).resolves.toEqual({
    items: [],
  });
  expect(global.fetch.mock.calls[0][0]).toBe("https://api.example.test/api/v1/virtual-courses?page=2");
});

test("turns error responses into ApiError with status and code", async () => {
  const { request, ApiError } = load();
  global.fetch = jest.fn().mockResolvedValue(
    jsonResponse(400, { status: 400, message: "Invalid request", data: null, error: { code: "VALIDATION", issues: [{ field: "limit" }] } })
  );
  const err = await request("/virtual-courses").catch((e) => e);
  expect(err).toBeInstanceOf(ApiError);
  expect(err).toMatchObject({ status: 400, code: "VALIDATION", message: "Invalid request" });
  expect(err.issues).toHaveLength(1);
});

test("reports network failures without a status", async () => {
  const { request } = load();
  global.fetch = jest.fn().mockRejectedValue(new TypeError("Failed to fetch"));
  await expect(request("/virtual-courses")).rejects.toMatchObject({ status: 0, code: "NETWORK" });
});

test("sends the admin token as a Bearer header with the date range", async () => {
  load();
  const { getOverview } = require("./adminAnalytics");
  global.fetch = jest.fn().mockResolvedValue(jsonResponse(200, { status: 200, data: { totalLearners: 1 } }));
  await getOverview("tok", { from: "2026-10-01", to: "2026-10-31" });
  const [url, init] = global.fetch.mock.calls[0];
  expect(url).toBe("https://api.example.test/api/v1/admin/analytics/overview?from=2026-10-01&to=2026-10-31");
  expect(init.headers.Authorization).toBe("Bearer tok");
});

test("login posts JSON and returns the session", async () => {
  load();
  const { login } = require("./adminAnalytics");
  const session = { token: "t", tokenType: "Bearer", expiresIn: "2h", admin: { email: "a@example.com" } };
  global.fetch = jest.fn().mockResolvedValue(jsonResponse(200, { status: 200, data: session }));
  await expect(login({ email: "a@example.com", password: "pw" })).resolves.toEqual(session);
  const [url, init] = global.fetch.mock.calls[0];
  expect(url).toBe("https://api.example.test/api/v1/admin/login");
  expect(init.method).toBe("POST");
  expect(init.headers["Content-Type"]).toBe("application/json");
  expect(JSON.parse(init.body)).toEqual({ email: "a@example.com", password: "pw" });
});

test("caches public GETs and shares in-flight requests", async () => {
  const { cachedRequest } = load();
  global.fetch = jest.fn().mockResolvedValue(jsonResponse(200, { status: 200, data: [1] }));
  await Promise.all([cachedRequest("/virtual-courses"), cachedRequest("/virtual-courses")]);
  await cachedRequest("/virtual-courses");
  expect(global.fetch).toHaveBeenCalledTimes(1);
});

test("does not cache failures", async () => {
  const { cachedRequest } = load();
  global.fetch = jest
    .fn()
    .mockRejectedValueOnce(new TypeError("offline"))
    .mockResolvedValueOnce(jsonResponse(200, { status: 200, data: "ok" }));
  await expect(cachedRequest("/virtual-courses")).rejects.toBeTruthy();
  await expect(cachedRequest("/virtual-courses")).resolves.toBe("ok");
});

test("CSV export returns the file and its name", async () => {
  load();
  const { exportCsv } = require("./adminAnalytics");
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    status: 200,
    headers: { get: (h) => (h.toLowerCase() === "content-disposition" ? 'attachment; filename="trainercentral-learners-2026-11-03.csv"' : null) },
    blob: async () => "csv-bytes",
  });
  await expect(exportCsv("k", "learners")).resolves.toEqual({
    blob: "csv-bytes",
    filename: "trainercentral-learners-2026-11-03.csv",
  });
  expect(global.fetch.mock.calls[0][0]).toBe("https://api.example.test/api/v1/admin/analytics/export?type=learners");
});

test("refuses to call anything when no API address is configured", async () => {
  jest.resetModules();
  delete process.env.REACT_APP_API_BASE_URL;
  process.env.REACT_APP_USE_MOCKS = "false";
  const { request } = require("./client");
  global.fetch = jest.fn();
  await expect(request("/virtual-courses")).rejects.toMatchObject({ code: "NOT_CONFIGURED" });
  expect(global.fetch).not.toHaveBeenCalled();
});

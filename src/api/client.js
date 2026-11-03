// Client for the Grazac backend (`/api/v1`). Every response uses the
// envelope `{ status, message, data }`; `request` returns `data` and turns
// anything else into an ApiError.
//
// The base URL comes from REACT_APP_API_BASE_URL at build time. In
// development, REACT_APP_USE_MOCKS=true answers from local sample data
// instead; production builds never include the mocks.

const trimSlash = (s) => String(s || "").replace(/\/+$/, "");

export const API_BASE_URL = trimSlash(process.env.REACT_APP_API_BASE_URL);

export const usingMocks =
  process.env.NODE_ENV !== "production" && process.env.REACT_APP_USE_MOCKS === "true";

export class ApiError extends Error {
  constructor(message, { status = 0, code = null, issues = [] } = {}) {
    super(message);
    this.name = "ApiError";
    this.status = status; // 0 = no response (offline, CORS, not configured)
    this.code = code;
    this.issues = issues;
  }
}

export const isAbort = (err) => err && err.name === "AbortError";

const buildUrl = (path, params) => {
  const query = new URLSearchParams();
  Object.entries(params || {}).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") query.set(key, String(value));
  });
  const qs = query.toString();
  return `${API_BASE_URL}/api/v1${path}${qs ? `?${qs}` : ""}`;
};

const loadMocks = () =>
  process.env.NODE_ENV !== "production"
    ? import("./mocks/adapter").then((m) => m.default)
    : Promise.reject(new Error("Mocks are not available in production"));

const parseBody = async (res) => {
  const type = res.headers.get("content-type") || "";
  if (type.includes("application/json")) {
    try {
      return await res.json();
    } catch (e) {
      return null;
    }
  }
  return null;
};

/**
 * @param {string} path      Path under /api/v1, e.g. "/virtual-courses"
 * @param {Object} [options]
 * @param {Object} [options.params]   Query parameters; empty values are dropped
 * @param {string} [options.method]
 * @param {Object} [options.headers]
 * @param {Object} [options.body]     Sent as JSON
 * @param {AbortSignal} [options.signal]
 * @param {"json"|"blob"} [options.as]  "blob" returns { blob, filename }
 */
export const request = async (path, { params, method = "GET", headers, body, signal, as = "json" } = {}) => {
  if (usingMocks) {
    const mocks = await loadMocks();
    return mocks({ path, params, method, headers, body, signal, as });
  }
  if (!API_BASE_URL) {
    throw new ApiError("The API address is not configured (REACT_APP_API_BASE_URL).", { code: "NOT_CONFIGURED" });
  }

  let res;
  try {
    res = await fetch(buildUrl(path, params), {
      method,
      signal,
      headers: {
        Accept: as === "blob" ? "text/csv" : "application/json",
        ...(body !== undefined ? { "Content-Type": "application/json" } : {}),
        ...headers,
      },
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
  } catch (err) {
    if (isAbort(err)) throw err;
    throw new ApiError("We couldn't reach the server. Check your connection and try again.", { code: "NETWORK" });
  }

  if (res.ok && as === "blob") {
    const disposition = res.headers.get("content-disposition") || "";
    const match = /filename="?([^";]+)"?/i.exec(disposition);
    return { blob: await res.blob(), filename: match ? match[1] : "export.csv" };
  }

  const payload = await parseBody(res);
  if (!res.ok) {
    throw new ApiError((payload && payload.message) || `Request failed (HTTP ${res.status})`, {
      status: res.status,
      code: payload && payload.error ? payload.error.code : null,
      issues: payload && payload.error && Array.isArray(payload.error.issues) ? payload.error.issues : [],
    });
  }
  if (!payload || !("data" in payload)) {
    throw new ApiError("The server sent an unexpected response.", { status: res.status, code: "BAD_RESPONSE" });
  }
  return payload.data;
};

// Short-lived cache for public GETs, so moving between catalogue pages
// doesn't refetch. Concurrent callers share one request. A request that
// fails or is aborted is not cached.
const cache = new Map();
const TTL_MS = 5 * 60 * 1000;

export const cachedRequest = (path, { params, signal } = {}) => {
  const key = buildUrl(path, params);
  const hit = cache.get(key);
  if (hit && Date.now() - hit.at < TTL_MS) return withAbort(hit.promise, signal);

  const promise = request(path, { params });
  cache.set(key, { at: Date.now(), promise });
  promise.catch(() => cache.delete(key));
  return withAbort(promise, signal);
};

// The shared request keeps running for other callers; the aborting caller
// just stops waiting for it.
const withAbort = (promise, signal) => {
  if (!signal) return promise;
  if (signal.aborted) return Promise.reject(abortError());
  return new Promise((resolve, reject) => {
    const onAbort = () => reject(abortError());
    signal.addEventListener("abort", onAbort, { once: true });
    promise.then(
      (v) => {
        signal.removeEventListener("abort", onAbort);
        resolve(v);
      },
      (e) => {
        signal.removeEventListener("abort", onAbort);
        reject(e);
      }
    );
  });
};

const abortError = () => {
  const err = new Error("Aborted");
  err.name = "AbortError";
  return err;
};

export const clearCache = () => cache.clear();

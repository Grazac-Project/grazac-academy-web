import { request } from "./client";

/** @typedef {import("./types").Overview} Overview */
/** @typedef {import("./types").CourseStats} CourseStats */
/** @typedef {import("./types").Learner} Learner */
/** @typedef {import("./types").Pagination} Pagination */

// Admin endpoints take `Authorization: Bearer <token>` from POST /admin/login.
// The backend checks the token, and that the account is still active, on
// every request. Responses are never cached here.
const bearer = (token) => ({ Authorization: `Bearer ${token}` });

/**
 * @param {{email: string, password: string}} credentials
 * @returns {Promise<{token: string, tokenType: "Bearer", expiresIn: string, admin: import("./types").Admin}>}
 */
export const login = (credentials) => request("/admin/login", { method: "POST", body: credentials });

/** @returns {Promise<import("./types").Admin>} */
export const getMe = (token, signal) => request("/admin/me", { headers: bearer(token), signal });

/**
 * @param {{from?: string, to?: string}} range  ISO dates; the backend defaults to the last 30 days
 * @returns {Promise<Overview>}
 */
export const getOverview = (token, { from, to } = {}, signal) =>
  request("/admin/analytics/overview", { params: { from, to }, headers: bearer(token), signal });

/** @returns {Promise<CourseStats[]>} */
export const getCourseStats = (token, signal) =>
  request("/admin/analytics/courses", { headers: bearer(token), signal });

/**
 * @param {{page?: number, limit?: number, search?: string, courseId?: string, status?: number, completed?: boolean}} params
 * @returns {Promise<{items: Learner[], pagination: Pagination}>}
 */
export const getLearners = (token, params = {}, signal) =>
  request("/admin/analytics/learners", { params, headers: bearer(token), signal });

/** @returns {Promise<{jobs: import("./types").SyncJobState[], recentRuns: import("./types").SyncRun[]}>} */
export const getSyncStatus = (token, signal) =>
  request("/admin/analytics/sync-status", { headers: bearer(token), signal });

/** @param {"courses"|"learners"|"enrollments"|"tests"} job */
export const triggerSync = (token, job) =>
  request(`/admin/analytics/sync/${encodeURIComponent(job)}`, { method: "POST", headers: bearer(token) });

/**
 * @param {"learners"|"enrollments"|"courses"|"tests"} type
 * @returns {Promise<{blob: Blob, filename: string}>}
 */
export const exportCsv = (token, type) =>
  request("/admin/analytics/export", { params: { type }, headers: bearer(token), as: "blob" });

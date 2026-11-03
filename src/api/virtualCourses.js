import { cachedRequest } from "./client";

/** @typedef {import("./types").VirtualCourse} VirtualCourse */
/** @typedef {import("./types").Pagination} Pagination */

export const MAX_PAGE_SIZE = 50;

/**
 * Published virtual courses.
 * @param {{page?: number, limit?: number, search?: string, category?: string, featured?: boolean}} [params]
 * @param {AbortSignal} [signal]
 * @returns {Promise<{items: VirtualCourse[], pagination: Pagination}>}
 */
export const listVirtualCourses = (params = {}, signal) =>
  cachedRequest("/virtual-courses", {
    params: { page: 1, limit: MAX_PAGE_SIZE, ...params },
    signal,
  });

/**
 * One published course by slug. Rejects with an ApiError (status 404) when the
 * course doesn't exist or isn't public.
 * @param {string} slug
 * @param {AbortSignal} [signal]
 * @returns {Promise<VirtualCourse>}
 */
export const getVirtualCourse = (slug, signal) =>
  cachedRequest(`/virtual-courses/${encodeURIComponent(slug)}`, { signal });

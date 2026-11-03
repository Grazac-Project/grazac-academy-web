// Display helpers for virtual courses from the backend.

const DEFAULT_ENROLL_HOSTS = ["learn.grazacacademy.com", "grazac-academy.trainercentralsite.com"];

// Hosts an Enrol Now button may send learners to. The branded domain comes
// first; the TrainerCentral host stays allowed until the custom domain is
// registered in TrainerCentral, because that is what the API returns today.
export const enrollHosts = () => {
  const configured = (process.env.REACT_APP_ENROLL_HOSTS || "")
    .split(",")
    .map((h) => h.trim().toLowerCase())
    .filter(Boolean);
  return configured.length ? configured : DEFAULT_ENROLL_HOSTS;
};

/**
 * Returns the enrolment URL if it is safe to link to, otherwise null. The URL
 * is used exactly as the backend sent it: never rebuilt or re-hosted.
 * @param {?string} url
 * @param {string[]} [hosts]
 */
export const safeEnrollmentUrl = (url, hosts = enrollHosts()) => {
  if (!url || typeof url !== "string") return null;
  let parsed;
  try {
    parsed = new URL(url);
  } catch (e) {
    return null;
  }
  if (parsed.protocol !== "https:" || parsed.username || parsed.password) return null;
  return hosts.includes(parsed.hostname.toLowerCase()) ? url : null;
};

export const isBrandedUrl = (url) => {
  try {
    return new URL(url).hostname.toLowerCase() === DEFAULT_ENROLL_HOSTS[0];
  } catch (e) {
    return false;
  }
};

/**
 * "Free", "₦50,000" or null when the backend has no usable price.
 * @param {{price: ?number, currency: ?string, isPaid: boolean}} course
 */
export const formatPrice = (course) => {
  if (!course) return null;
  const { price, currency, isPaid } = course;
  if (!isPaid && price === 0) return "Free";
  if (typeof price !== "number" || !Number.isFinite(price) || price <= 0 || !currency) return null;
  try {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency,
      maximumFractionDigits: price % 1 === 0 ? 0 : 2,
    }).format(price);
  } catch (e) {
    return `${currency} ${price.toLocaleString("en-NG")}`;
  }
};

// The backend's description is plain text with blank lines between paragraphs.
export const paragraphs = (text) =>
  String(text || "")
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

export const excerpt = (text, max = 160) => {
  const clean = String(text || "").replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max);
  return `${cut.slice(0, Math.max(cut.lastIndexOf(" "), max - 20)).trim()}…`;
};

// Courses can arrive twice when a page is reloaded during "load more", or an
// admin reorders the list between pages. Keep the first copy of each id.
export const uniqueById = (items) => {
  const seen = new Set();
  return items.filter((c) => {
    if (!c || !c.id || seen.has(c.id)) return false;
    seen.add(c.id);
    return true;
  });
};

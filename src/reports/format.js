// Formatting for report tables and cards.

const nf = new Intl.NumberFormat("en-NG");

export const number = (n) => (typeof n === "number" && Number.isFinite(n) ? nf.format(n) : "—");

// Rates arrive as 0–1; progress arrives as 0–100.
export const rate = (r) => (typeof r === "number" && Number.isFinite(r) ? `${Math.round(r * 1000) / 10}%` : "—");
export const percent = (p) => (typeof p === "number" && Number.isFinite(p) ? `${Math.round(p * 10) / 10}%` : "—");

export const dateTime = (iso) => {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleString("en-NG", { dateStyle: "medium", timeStyle: "short" });
};

export const date = (iso) => {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("en-NG", { dateStyle: "medium" });
};

export const relative = (iso, now = Date.now()) => {
  if (!iso) return "never";
  const diff = now - new Date(iso).getTime();
  if (!Number.isFinite(diff)) return "—";
  const mins = Math.round(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins} min ago`;
  const hours = Math.round(mins / 60);
  if (hours < 48) return `${hours} h ago`;
  return `${Math.round(hours / 24)} days ago`;
};

export const learnerStatus = { 1: "Active", 2: "Invited", "-1": "Blocked" };

// The oldest successful sync across jobs: the dashboard is only as fresh as that.
export const oldestSuccess = (freshness) => {
  const times = Object.values(freshness || {})
    .map((f) => f && f.lastSuccessAt)
    .filter(Boolean)
    .map((t) => new Date(t).getTime());
  return times.length ? new Date(Math.min(...times)).toISOString() : null;
};

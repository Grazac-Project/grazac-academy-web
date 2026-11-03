// Development-only stand-in for the backend, used when REACT_APP_USE_MOCKS=true.
// client.js only imports this file outside production builds.
//
// Every record is sample data shaped like
// grazac-academy-back-end/docs/trainercentral/openapi.yaml. Names, prices
// and numbers are made up and must never be shown as real figures.

import { ApiError } from "../client";

const MOCK_ADMIN = { email: "mock-admin@example.com", password: "dev-mock-password" };
const MOCK_TOKEN = "mock-admin-token";

const day = 24 * 60 * 60 * 1000;
const ago = (days) => new Date(Date.now() - days * day).toISOString();

const courses = [
  {
    id: "mock-1",
    trainerCentralCourseId: "1655448000000021227",
    slug: "sample-frontend-web-development",
    title: "Sample: Front-End Web Development",
    description:
      "Sample course from the development mocks.\n\nBuild responsive websites with HTML, CSS and JavaScript.",
    descriptionHtml: null,
    thumbnailUrl: null,
    categories: ["Software Engineering"],
    duration: null,
    price: 50000,
    currency: "NGN",
    isPaid: true,
    enrollmentUrl: "https://learn.grazacacademy.com/course/sample-frontend-web-development",
    outcomes: ["Build a responsive web page from a design", "Use JavaScript to make pages interactive"],
    instructors: [{ name: "Sample Instructor", title: "Front-end engineer", bio: "Sample bio from the mocks.", photoUrl: null }],
    curriculum: [
      { name: "Sample lesson: HTML basics", type: "on-demand", sectionId: "s1", order: 0 },
      { name: "Sample lesson: Live Q&A", type: "live", sectionId: "s1", order: 1 },
      { name: "Sample assignment: Landing page", type: "assignment", sectionId: "s2", order: 2 },
    ],
    isFeatured: true,
    lastSyncedAt: ago(0.1),
  },
  {
    id: "mock-2",
    trainerCentralCourseId: "1655448000000021300",
    slug: "sample-intro-to-product-design",
    title: "Sample: Introduction to Product Design",
    description: "Sample free course from the development mocks. Learn the basics of UI/UX.",
    descriptionHtml: null,
    thumbnailUrl: null,
    categories: ["Business & Product"],
    duration: null,
    price: 0,
    currency: null,
    isPaid: false,
    enrollmentUrl: "https://grazac-academy.trainercentralsite.com/course/sample-intro-to-product-design",
    outcomes: [],
    instructors: [],
    curriculum: [],
    isFeatured: false,
    lastSyncedAt: ago(0.1),
  },
  {
    id: "mock-3",
    trainerCentralCourseId: "1655448000000021400",
    slug: "sample-no-enrolment-link",
    title: "Sample: Course Without an Enrolment Link",
    description: "Sample course whose enrolment URL failed the backend's check, so enrollmentUrl is null.",
    descriptionHtml: null,
    thumbnailUrl: null,
    categories: ["AI & Data"],
    duration: null,
    price: 75000,
    currency: "NGN",
    isPaid: true,
    enrollmentUrl: null,
    outcomes: [],
    instructors: [],
    curriculum: [],
    isFeatured: false,
    lastSyncedAt: ago(0.1),
  },
];

const courseStats = courses.map((c, i) => ({
  trainerCentralCourseId: c.trainerCentralCourseId,
  slug: c.slug,
  title: c.title,
  published: true,
  enrollments: [42, 18, 7][i],
  distinctLearners: [40, 18, 7][i],
  completedEnrollments: [11, 9, 0][i],
  completionRate: [11 / 42, 9 / 18, 0][i],
  averageCompletionPercentage: [46.5, 61.2, 12][i],
  certificatesIssued: [10, 9, 0][i],
  tests: { passed: [20, 6, 0][i], failed: [4, 1, 0][i], pending: [2, 0, 0][i], averagePercentage: [71.5, 80, null][i] },
  enrolledCountReportedByTrainerCentral: [43, 18, 7][i],
}));

const learners = Array.from({ length: 47 }, (_, i) => {
  const n = i + 1;
  const course = courses[i % courses.length];
  const pct = (n * 37) % 101;
  return {
    orgMemberId: String(2160300000000500 + n),
    name: `Sample Learner ${n}`,
    email: `learner${n}@example.com`,
    status: n % 11 === 0 ? 2 : 1,
    signedUpAt: ago(90 - n),
    lastLoginAt: n % 5 === 0 ? null : ago(n % 40),
    enrollments: [
      {
        trainerCentralCourseId: course.trainerCentralCourseId,
        courseTitle: course.title,
        status: 50,
        enrolledAt: ago(80 - n),
        completionPercentage: pct,
        completedLessons: Math.round(pct / 10),
        totalLessons: 10,
        completedAt: pct === 100 ? ago(n % 20) : null,
        certificateIssued: pct === 100,
      },
    ],
    testResults:
      n % 3 === 0
        ? []
        : [
            {
              trainerCentralCourseId: course.trainerCentralCourseId,
              courseTitle: course.title,
              testId: `t${n % 2}`,
              result: n % 7 === 0 ? "PENDING" : pct >= 50 ? "PASS" : "FAIL",
              score: Math.round(pct / 10),
              maxScore: 10,
              percentage: pct,
              attemptCount: 1 + (n % 2),
              allowedAttempt: 3,
              completedAt: ago(n % 30),
            },
          ],
  };
});

const jobs = ["courses", "learners", "enrollments", "tests"].map((job, i) => ({
  job,
  lastStartedAt: ago(0.05 + i * 0.01),
  lastFinishedAt: ago(0.04 + i * 0.01),
  lastSuccessAt: ago(0.04 + i * 0.01),
  lastStatus: "success",
  consecutiveFailures: 0,
}));

const runs = jobs.map((j) => ({
  job: j.job,
  trigger: "schedule",
  startedAt: j.lastStartedAt,
  finishedAt: j.lastFinishedAt,
  status: "success",
  counts: { fetched: 47, created: 0, updated: 3, removed: 0, failed: 0 },
}));

const page = (list, { page: p = 1, limit = 12 }) => {
  const pageNum = Number(p) || 1;
  const size = Number(limit) || 12;
  const start = (pageNum - 1) * size;
  return {
    items: list.slice(start, start + size),
    pagination: { page: pageNum, limit: size, total: list.length, totalPages: Math.ceil(list.length / size) },
  };
};

const delay = (signal) =>
  new Promise((resolve, reject) => {
    const t = setTimeout(resolve, 450);
    if (signal)
      signal.addEventListener("abort", () => {
        clearTimeout(t);
        const err = new Error("Aborted");
        err.name = "AbortError";
        reject(err);
      });
  });

const notFound = () => new ApiError("Course not found", { status: 404 });

const route = ({ path, params = {}, method, headers = {}, body, as }) => {
  if (path === "/admin/login" && method === "POST") {
    if (!body || body.email !== MOCK_ADMIN.email || body.password !== MOCK_ADMIN.password) {
      throw new ApiError("Invalid email or password", { status: 401 });
    }
    return {
      token: MOCK_TOKEN,
      tokenType: "Bearer",
      expiresIn: "2h",
      admin: { id: "mock-admin", email: MOCK_ADMIN.email, role: "admin", lastLoginAt: ago(1) },
    };
  }
  if (path === "/virtual-courses") {
    let list = courses;
    if (params.search) list = list.filter((c) => c.title.toLowerCase().includes(String(params.search).toLowerCase()));
    if (params.category) list = list.filter((c) => c.categories.includes(params.category));
    return page(list, params);
  }
  if (path.startsWith("/virtual-courses/")) {
    const key = decodeURIComponent(path.split("/")[2]).toLowerCase();
    const found = courses.find((c) => c.slug === key || c.id === key || c.trainerCentralCourseId === key);
    if (!found) throw notFound();
    return found;
  }

  if (path.startsWith("/admin/")) {
    if (headers.Authorization !== `Bearer ${MOCK_TOKEN}`) throw new ApiError("Unauthorized", { status: 401 });
    if (path === "/admin/me") return { id: "mock-admin", email: MOCK_ADMIN.email, role: "admin", lastLoginAt: ago(1) };

    if (path === "/admin/analytics/overview") {
      const to = params.to ? new Date(`${params.to}T23:59:59.999Z`) : new Date();
      const from = params.from ? new Date(`${params.from}T00:00:00.000Z`) : new Date(to - 30 * day);
      const within = (iso) => iso && new Date(iso) >= from && new Date(iso) <= to;
      const enrolments = learners.flatMap((l) => l.enrollments);
      const tests = learners.flatMap((l) => l.testResults);
      const completed = enrolments.filter((e) => e.completionPercentage === 100).length;
      const scored = tests.filter((t) => typeof t.percentage === "number");
      return {
        range: { from: from.toISOString(), to: to.toISOString() },
        totalLearners: learners.filter((l) => l.status === 1).length,
        activeLearners: learners.filter((l) => l.status === 1 && within(l.lastLoginAt)).length,
        newLearners: learners.filter((l) => within(l.signedUpAt)).length,
        totalCourses: { published: courses.length, unpublished: 1 },
        totalEnrollments: enrolments.length,
        newEnrollments: enrolments.filter((e) => within(e.enrolledAt)).length,
        completedEnrollments: completed,
        completionsInRange: enrolments.filter((e) => within(e.completedAt)).length,
        completionRate: completed / enrolments.length,
        certificatesIssued: completed,
        assessments: {
          passed: tests.filter((t) => t.result === "PASS").length,
          failed: tests.filter((t) => t.result === "FAIL").length,
          pending: tests.filter((t) => t.result === "PENDING").length,
          averagePercentage: scored.length ? scored.reduce((a, t) => a + t.percentage, 0) / scored.length : null,
        },
        dataFreshness: Object.fromEntries(jobs.map((j) => [j.job, { lastSuccessAt: j.lastSuccessAt, lastStatus: j.lastStatus }])),
      };
    }
    if (path === "/admin/analytics/courses") return courseStats;
    if (path === "/admin/analytics/learners") {
      let list = learners;
      if (params.search) {
        const q = String(params.search).toLowerCase();
        list = list.filter((l) => `${l.name} ${l.email}`.toLowerCase().includes(q));
      }
      if (params.courseId) list = list.filter((l) => l.enrollments.some((e) => e.trainerCentralCourseId === params.courseId));
      if (params.status !== undefined && params.status !== "") list = list.filter((l) => l.status === Number(params.status));
      if (params.completed !== undefined && params.completed !== "")
        list = list.filter((l) => l.enrollments.some((e) => e.completionPercentage === 100) === (String(params.completed) === "true"));
      return page(list, { page: params.page, limit: params.limit || 20 });
    }
    if (path === "/admin/analytics/sync-status") return { jobs, recentRuns: runs };
    if (path.startsWith("/admin/analytics/sync/") && method === "POST") return { job: path.split("/").pop() };
    if (path === "/admin/analytics/export" && as === "blob") {
      const csv = "orgMemberId,name,email\n" + learners.map((l) => `${l.orgMemberId},${l.name},${l.email}`).join("\n");
      return { blob: new Blob([csv], { type: "text/csv" }), filename: `sample-${params.type}.csv` };
    }
  }
  throw new ApiError(`No mock for ${method} ${path}`, { status: 404 });
};

const adapter = async (req) => {
  await delay(req.signal);
  return route(req);
};

export default adapter;

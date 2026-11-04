# TrainerCentral integration (website)

Virtual courses are sold and taught on **Grazac Learn** (Zoho TrainerCentral). This website lists them and links learners there. It never handles their registration, passwords, payments or progress.

The backend (`grazac-academy-back-end`) syncs TrainerCentral into MongoDB and serves the data. Its contract is in that repo: `docs/trainercentral/openapi.yaml`.

## What the site does

| Area | Behaviour |
|---|---|
| `/courses` | Physical courses come from `src/site/data/courses.js`, as before. Virtual courses come from `GET /api/v1/virtual-courses`. The page has loading skeletons, an error state with retry, an empty state, de-duplication by `id`, and "Show more" for further pages. If the API is down, the physical courses still show |
| `/virtual`, Home | The virtual course lists come from the API. The old sign-up / assessment / Flutterwave steps for virtual courses are replaced by "Enrol on Grazac Learn" |
| Course details | Same URL as before: `/course-detail-graduate?course=<slug>`. A slug goes to the virtual page (`GET /api/v1/virtual-courses/:slug`) when the URL has `&mode=virtual`, when the site only knows it as a virtual course, or when the site doesn't know it at all. Old virtual-course links still load and say enrolment isn't open. Physical courses are unchanged |
| Enrol Now | Uses `enrollmentUrl` exactly as the backend sends it. The link only shows if the URL is `https:` and on an approved host (see `REACT_APP_ENROLL_HOSTS`); otherwise the card says "Enrolment opening soon". The site never builds or re-hosts these URLs |
<!-- | Navigation | "My Learning" (https://learn.grazacacademy.com) is in the main nav, the mobile drawer and the footer. The More menu has Virtual courses and Physical courses. The physical-cohort `/login` stays and is labelled as such | -->
| Pricing | The virtual tab says each course has its own price and links to the catalogue. Physical plans are unchanged |
| `/reports` | Staff reporting dashboard: Overview (all-time totals, plus figures for a chosen date range and assessment results), Course performance (including test results), Learner analytics (progress and test results per learner), Sync status, plus CSV export for learners, enrolments, courses and tests. Staff sign in with their own admin account (`POST /admin/login`); the 2-hour token is kept in `sessionStorage` for the tab, and the password is never stored. It doesn't touch the existing admin app's pages. Search engines are blocked by `robots.txt` and a `noindex` meta tag |

Prices are shown only when the backend provides them ("Free" when `price` is 0 and the course isn't paid). Outcomes, curriculum and instructors are shown when present; instructor photos only load over https. `duration` isn't shown, because TrainerCentral doesn't document its unit codes. Course descriptions are rendered from the plain-text `description`. The unsanitised `descriptionHtml` is never rendered.

## Code map

- `src/api/client.js`: base URL, envelope unwrapping, `ApiError`, a 5-minute cache for public GETs, abort support, and the development mock switch.
- `src/api/virtualCourses.js` and `src/api/adminAnalytics.js`: the endpoints.
- `src/api/types.js`: JSDoc types copied from the OpenAPI spec.
- `src/api/mocks/adapter.js`: sample data for local development only, never included in production builds.
- `src/lib/courseFormat.js`: the enrolment URL guard, price formatting and text helpers.
- `src/site/components/VirtualCourses.js` and `src/site/hooks/useVirtualCourses.js`: the virtual course cards and the data hook.
- `src/site/pages/VirtualCourseDetail.js`: the virtual course details page.
- `src/reports/`: the dashboard.

## Configuration

See `.env.example`.

| Variable | Notes |
|---|---|
| `REACT_APP_API_BASE_URL` | **Required in production.** Without it, virtual course sections show their error state |
| `REACT_APP_ENROLL_HOSTS` | Optional allow-list for Enrol links |
| `REACT_APP_USE_MOCKS=true` | Development only. Put it in `.env.development.local` to work without the backend. The mock sign-in details are shown on the sign-in screen |

## Running and testing

```bash
npm install
npm start            # http://localhost:3000
CI=true npm test     # 45 tests: URL guard, API client, catalogue states, details, reports
npm run build
```

## Deploying (Vercel)

1. Set `REACT_APP_API_BASE_URL` for the Production environment (and Preview, if previews should show data).
2. Deploy the `trainercentral` branch. CRA's preset handles client-side routes.
3. After deploying, check:
   - `/courses?mode=virtual` lists courses;
   - one free course's and one paid course's Enrol link opens the right TrainerCentral page;
   - My Learning opens Grazac Learn;
   - `/reports` asks for the key;
   - physical course pages and `/signup` still work.

## Running against a local backend

`.claude/launch.json` has a `grazac-backend-local` entry. It runs `grazac-academy-back-end` on port 3500 with `TC_SYNC_ENABLED=false`, so nothing syncs from TrainerCentral, and with CORS limited to `http://localhost:3000`. Then set `REACT_APP_API_BASE_URL=http://localhost:3500` in `.env.development.local` and restart `npm start`. That backend `.env` points at the `dbAdmin` database on the `grazacdb` cluster, which is the main app's database: reads are real, and admin report views write audit log entries there.

Checked on 2026-11-03:
- The public catalogue call works end to end: CORS, the response envelope and the empty state.
- The database had no TrainerCentral data. A **courses-only sync** (`node script/trainercentralSync.js courses`) then ran into `dbAdmin`. It fetched and created 7 courses, 5 of them public, with no failures; no learner, enrolment or test data was synced. It first had to wait for a stale lease, left in `syncstates` by a crashed run (PID 76720 on this Mac, 11:39 UTC), to expire.
- **Real catalogue (5 courses):**

  | Course | Price |
  |---|---|
  | Become a Data Analyst | ₦50,000 |
  | Fundamentals of Cybersecurity | Free |
  | Become a Pentester | ₦50,000 |
  | Become a Security Analyst | ₦150,000 |
  | Introduction to UX | Free |

  Every Enrol URL (2 free, 3 paid) opened the matching TrainerCentral course page. Both thumbnails load without signing in.
- **Data gaps in TrainerCentral:**
  - no course has a category, so the site hides category filters that would show nothing;
  - only Become a Pentester has a description, so the others show a short fallback;
  - only 2 courses have thumbnails;
  - no outcomes or instructors (admins set these through `PATCH /admin/virtual-courses/:id`);
  - no curriculum: the Zoho token lacks the `TrainerCentral.sessionsapi.READ` scope (re-run `npm run tc-auth` with it).
- Admin routes return 503 locally, because `ADMIN_JWT_SECRET` isn't set, and the dashboard shows "Admin access isn't configured". **No admin accounts exist yet** (`npm run create-admin`).

## Backend dependencies

1. **Deploy the backend.** The TrainerCentral code in `grazac-academy-back-end` was uncommitted when this was written, and both Render services (`grazac-academy-back-end-ej7s`, `grazac-academy-admin`) return *"Service Suspended"*. That also breaks the existing physical-course curriculum section.
2. **Configuration:**
   - set `ADMIN_JWT_SECRET` (32+ characters) and create staff accounts with `npm run create-admin`;
   - set `CORS_ORIGINS` to the website's origins, e.g. `https://www.grazacacademy.com,https://grazacacademy.com`, plus any Vercel preview pattern;
   - run the first sync.
3. **The backend's new admin login replaces the old one.** In the uncommitted backend change, `POST /api/v1/admin/login` now uses the new `adminusers` accounts, and the existing admin routes (`fetchAllUser`, `fetchData/:id`, `status`, `acceptAll`, `rejectAll`, the delete routes) now require the new admin token. The old `forgetPassword` and `resetPassword` routes are gone. **The current admin app will stop working when this deploys** unless it moves to the new login and accounts are created first. Learner pages on this site don't call those routes (`getDetails` in `src/api/dashboard/data.js` is unused).
4. **Still not available:**
   - per-course "active learners";
   - revenue: TrainerCentral has no payments API, so the brief rules it out.
5. **Duration units.** If course durations should be shown, confirm what TrainerCentral's `durationType` codes mean.

## Platform issue: branded learner domain

`learn.grazacacademy.com` points to TrainerCentral, but TrainerCentral sends every path on it to `grazac-academy.trainercentralsite.com` with a 301, keeping the path. For example, `/course/x` goes to `https://grazac-academy.trainercentralsite.com/course/x`. The backend also confirmed that the custom domain isn't registered as a TrainerCentral learner domain. As a result:

- **My Learning** works, but learners end up on the trainercentralsite.com address.
- **Course URLs** returned by the API are on `grazac-academy.trainercentralsite.com`, so that host is allowed for Enrol links for now.

**Fix (TrainerCentral admin or Zoho support):** register `learn.grazacacademy.com` as the default learner domain. Then course URLs follow automatically, and `REACT_APP_ENROLL_HOSTS` can be narrowed to the branded host.

## Content to review

The marketing copy still says virtual courses run "three months, live" with a mentor:
- Home "Virtual · 3 months";
- the Virtual page perks and hero;
- the footer blurb;
- the FAQs.

Confirm this still holds for the courses on TrainerCentral, or update it.

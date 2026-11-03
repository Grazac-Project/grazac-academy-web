// Shapes returned by the Grazac backend's TrainerCentral endpoints.
// Source of truth: grazac-academy-back-end/docs/trainercentral/openapi.yaml.
// IDs are strings: TrainerCentral IDs are too large for JavaScript numbers.

/**
 * @typedef {Object} Pagination
 * @property {number} page
 * @property {number} limit
 * @property {number} total
 * @property {number} totalPages
 */

/**
 * @typedef {Object} VirtualCourse
 * @property {string} id
 * @property {string} trainerCentralCourseId
 * @property {string} slug
 * @property {string} title
 * @property {?string} description      Plain text. Render this, never descriptionHtml.
 * @property {?string} descriptionHtml  Unsanitised TrainerCentral rich text. Not rendered.
 * @property {?string} thumbnailUrl
 * @property {string[]} categories
 * @property {?{type: number, value: number}} duration  Unit codes are undocumented, so not shown.
 * @property {?number} price            0 for free courses
 * @property {?string} currency         ISO code, null for free courses
 * @property {boolean} isPaid
 * @property {?string} enrollmentUrl    Verified by the backend; null when none is available
 * @property {string[]} outcomes        Set by admins; may be empty
 * @property {Instructor[]} instructors Set by admins; may be empty
 * @property {{name: string, type: "live"|"on-demand"|"assignment"|"other", sectionId: ?string, order: number}[]} curriculum
 * @property {boolean} isFeatured
 * @property {?string} lastSyncedAt     ISO date-time
 */

/**
 * @typedef {Object} Instructor
 * @property {string} name
 * @property {?string} title
 * @property {?string} bio
 * @property {?string} photoUrl         https only
 */

/**
 * @typedef {Object} TestSummary
 * @property {number} passed
 * @property {number} failed
 * @property {number} pending
 * @property {?number} averagePercentage  0–100
 */

/**
 * @typedef {Object} Admin
 * @property {string} id
 * @property {string} email
 * @property {"admin"} role
 * @property {?string} lastLoginAt
 */

/**
 * @typedef {Object} Overview
 * @property {{from: string, to: string}} range   ISO date-times the "in range" figures cover
 * @property {number} totalLearners
 * @property {number} activeLearners    Signed in within range
 * @property {number} newLearners       Signed up within range
 * @property {{published: number, unpublished: number}} totalCourses
 * @property {number} totalEnrollments
 * @property {number} newEnrollments
 * @property {number} completedEnrollments
 * @property {number} completionsInRange
 * @property {number} completionRate    0–1
 * @property {number} certificatesIssued
 * @property {TestSummary} assessments
 * @property {Object<string, {lastSuccessAt: ?string, lastStatus: ?string}>} dataFreshness
 */

/**
 * @typedef {Object} CourseStats
 * @property {string} trainerCentralCourseId
 * @property {string} slug
 * @property {string} title
 * @property {boolean} published
 * @property {number} enrollments
 * @property {number} distinctLearners
 * @property {number} completedEnrollments
 * @property {number} completionRate    0–1
 * @property {number} averageCompletionPercentage  0–100
 * @property {number} certificatesIssued
 * @property {TestSummary} tests
 * @property {number} enrolledCountReportedByTrainerCentral
 */

/**
 * @typedef {Object} LearnerEnrollment
 * @property {string} trainerCentralCourseId
 * @property {?string} courseTitle
 * @property {number} status            50 registered, 51 unenrolled
 * @property {?string} enrolledAt
 * @property {number} completionPercentage
 * @property {?number} completedLessons
 * @property {?number} totalLessons
 * @property {?string} completedAt
 * @property {boolean} certificateIssued
 */

/**
 * @typedef {Object} Learner
 * @property {string} orgMemberId
 * @property {?string} name
 * @property {?string} email
 * @property {number} status            1 active, 2 invited, -1 blocked
 * @property {?string} signedUpAt
 * @property {?string} lastLoginAt
 * @property {LearnerEnrollment[]} enrollments
 * @property {TestResult[]} testResults
 */

/**
 * @typedef {Object} TestResult
 * @property {string} trainerCentralCourseId
 * @property {?string} courseTitle
 * @property {?string} testId
 * @property {?("PASS"|"FAIL"|"PENDING")} result
 * @property {?number} score
 * @property {?number} maxScore
 * @property {?number} percentage
 * @property {number} attemptCount
 * @property {?number} allowedAttempt
 * @property {?string} completedAt
 */

/**
 * @typedef {Object} SyncJobState
 * @property {string} job
 * @property {?string} lastStartedAt
 * @property {?string} lastFinishedAt
 * @property {?string} lastSuccessAt
 * @property {?string} lastStatus
 * @property {number} consecutiveFailures
 */

/**
 * @typedef {Object} SyncRun
 * @property {string} job
 * @property {"schedule"|"manual"} trigger
 * @property {string} startedAt
 * @property {?string} finishedAt
 * @property {"running"|"success"|"partial"|"failed"} status
 * @property {{fetched: number, created: number, updated: number, removed: number, failed: number}} counts
 */

export {};

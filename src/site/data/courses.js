import { FiBarChart2, FiCpu } from "react-icons/fi";
import product from "../../images/product.png";
import frontend from "../../images/frontend.png";
import backend from "../../images/backend.png";
import android from "../../images/android.png";
import productManagement from "../../images/product_management.png";
import dataAnalysis from "../../images/analysis.png";
import cybersecurity from "../../images/cybersecurity.png";
import cloud from "../../images/cloud.png";

// Courses on offer this cohort. "onsite" means physical classes in Abeokuta.
//
// api:     backend slug for the outline and brochure. null shows "curriculum coming soon".
// tracks:  per-stack curricula (Back-End); each loads its own outline.
// Names, descriptions and outlines match the live grazacacademy.com course pages.
// aliases: old slugs that should still open this course (e.g. ?course=java).
// icon:    used when there's no course artwork.
// short:   the name shown on the course artwork on the courses page.

export const categories = [
  "AI & Data",
  "Cloud & Security",
  "Business & Product",
  "Software Engineering",
];

export const courses = [
  // Physical
  {
    slug: "ai-automation-bootcamp",
    short: "AI Automation",
    title: "AI Automation Bootcamp",
    category: "AI & Data",
    icon: FiCpu,
    modes: ["onsite"],
    api: null,
    isNew: true,
    summary:
      "Use AI tools and automation workflows to take repetitive work off a business's plate.",
  },
  {
    slug: "cybersecurity",
    short: "Cybersecurity",
    title: "Cybersecurity",
    category: "Cloud & Security",
    image: cybersecurity,
    modes: ["onsite"],
    api: "cybersecurity",
    summary:
      "Learn how to protect systems, networks, and data from cyber threats. This course covers security fundamentals, ethical hacking, penetration testing, and defensive strategies.",
  },
  {
    slug: "data-analysis",
    short: "Data Analytics",
    title: "Data Analysis",
    category: "AI & Data",
    image: dataAnalysis,
    modes: ["onsite"],
    api: "data-analysis",
    aliases: ["data-analytics"],
    summary:
      "Data Analysis involves using different tools and techniques to scrutinize and probe large volumes of data with the goal of solving problems, making informed business decisions, and improving processes.",
  },
  {
    slug: "business-analysis-project-management",
    short: "Business Analysis",
    title: "Business Analysis & Project Management",
    category: "Business & Product",
    icon: FiBarChart2,
    modes: ["onsite"],
    api: null,
    isNew: true,
    summary:
      "Work out what a business actually needs, write it up as requirements, then plan and deliver the project.",
  },
  {
    slug: "cloud-engineering-aws",
    short: "Cloud Engineering",
    title: "Cloud Engineering (AWS)",
    category: "Cloud & Security",
    image: cloud,
    modes: ["onsite"],
    api: "cloud-engineering-aws",
    aliases: ["cloud-engineering"],
    summary:
      "Master cloud infrastructure with AWS. Learn how to deploy, secure, and scale cloud applications.",
  },

  // Virtual
  {
    slug: "backend-development",
    short: "Back-End Development",
    title: "Back-End Development (Java, Node.js, Go)",
    category: "Software Engineering",
    image: backend,
    modes: ["virtual"],
    api: null,
    aliases: ["backend-web-development", "java", "golang"],
    stacks: ["Java", "Node.js", "Go (Golang)"],
    // Live curricula per stack; Go has none yet.
    tracks: [
      { name: "Node.js", api: "backend-web-development" },
      { name: "Java", api: "java" },
      { name: "Go (Golang)", api: null },
    ],
    summary:
      "Build the server side of applications: APIs, databases and business logic. Choose your stack: Node.js, for real-time applications such as chat, news feeds and push notifications; Java, used everywhere from web development to big data; or Go.",
  },
  {
    slug: "mobile-application-development",
    short: "Mobile App Development",
    title: "Mobile Application Development (Flutter)",
    category: "Software Engineering",
    image: android,
    modes: ["virtual"],
    api: "mobile-application-development",
    summary:
      "Learn to build cross-platform mobile applications using Flutter, an open-source UI framework. This course covers Dart programming, Flutter widgets, state management, API integration, and deploying mobile apps for iOS and Android.",
  },
  {
    slug: "frontend-web-development",
    short: "Front-End Development",
    title: "Front End Web Development (HTML, CSS & JavaScript)",
    category: "Software Engineering",
    image: frontend,
    modes: ["virtual"],
    api: "frontend-web-development",
    summary:
      "Front-end web development, also known as client-side development, is the practice of producing HTML, CSS, and JavaScript for a website or web application so that a user can see and interact with them directly.",
  },
  {
    slug: "product-management",
    short: "Product Management",
    title: "Product Management",
    category: "Business & Product",
    image: productManagement,
    modes: ["virtual"],
    api: "product-management",
    summary:
      "This course provides comprehensive knowledge on how to guide product development, from ideation to market launch, by aligning business, technology, and user needs. You'll master market research, product strategy, roadmap development, and stakeholder management.",
  },
  {
    slug: "product-designing-ui-ux",
    short: "Product Design",
    title: "Product Designing (UI/UX)",
    category: "Business & Product",
    image: product,
    modes: ["virtual"],
    api: "product-designing-ui-ux",
    summary:
      "This course equips students with a deep understanding of UI/UX principles, helping them design user-friendly and visually appealing digital products. You'll learn design thinking, user research, prototyping, and testing to enhance the user experience.",
  },
];

export const coursesByMode = (mode) => courses.filter((c) => c.modes.includes(mode));

export const courseHref = (slug, mode) =>
  `/course-detail-graduate?course=${slug}${mode ? `&mode=${mode}` : ""}`;

export const findCourse = (slug) =>
  courses.find((c) => c.slug === slug || (c.aliases || []).includes(slug));

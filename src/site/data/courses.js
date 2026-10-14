import { FiBarChart2, FiCpu } from "react-icons/fi";
import product from "../../images/product.png";
import frontend from "../../images/frontend.png";
import backend from "../../images/backend.png";
import android from "../../images/android.png";
import productManagement from "../../images/product_management.png";
import dataAnalysis from "../../images/analysis.png";
import cybersecurity from "../../images/cybersecurity.png";
import cloud from "../../images/cloud.png";

// Single list of courses used across the site. Each course is offered in one
// learning mode ("onsite" = physical classes in Abeokuta, or "virtual").
//
// `api` is the backend slug whose curriculum (outline + brochure) is loaded on
// the course page. Leave it null when the backend has no outline yet; the page
// then shows a "curriculum coming soon" panel instead of modules.
// `aliases` keeps old links (e.g. ?course=java) pointing at the right course.
// Courses without artwork use `icon` instead of `image`.

export const categories = [
  "AI & Data",
  "Cloud & Security",
  "Business & Product",
  "Software Engineering",
];

export const courses = [
  // ---------- Onsite (physical) ----------
  {
    slug: "ai-automation-bootcamp",
    title: "AI Automation Bootcamp",
    category: "AI & Data",
    icon: FiCpu,
    modes: ["onsite"],
    api: null,
    isNew: true,
    summary:
      "Learn to use AI tools and automation workflows to cut repetitive work and build smarter processes for businesses.",
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    category: "Cloud & Security",
    image: cybersecurity,
    modes: ["onsite"],
    api: "cybersecurity",
    summary:
      "Protect systems, networks and data: security fundamentals, ethical hacking, penetration testing and defensive strategy.",
  },
  {
    slug: "data-analysis",
    title: "Data Analytics",
    category: "AI & Data",
    image: dataAnalysis,
    modes: ["onsite"],
    api: "data-analysis",
    aliases: ["data-analytics"],
    summary:
      "Clean, explore and visualise data to answer questions and support better business decisions.",
  },
  {
    slug: "business-analysis-project-management",
    title: "Business Analysis & Project Management",
    category: "Business & Product",
    icon: FiBarChart2,
    modes: ["onsite"],
    api: null,
    isNew: true,
    summary:
      "Gather requirements, analyse business needs, and plan, run and deliver projects successfully.",
  },
  {
    slug: "cloud-engineering-aws",
    title: "Cloud Engineering",
    category: "Cloud & Security",
    image: cloud,
    modes: ["onsite"],
    api: "cloud-engineering-aws",
    aliases: ["cloud-engineering"],
    summary:
      "Master cloud infrastructure on AWS — deploy, secure and scale cloud applications.",
  },

  // ---------- Virtual ----------
  {
    slug: "backend-development",
    title: "Back-End Development (Java, Node.js, Go)",
    category: "Software Engineering",
    image: backend,
    modes: ["virtual"],
    api: null,
    aliases: ["backend-web-development", "java", "golang"],
    stacks: ["Java", "Node.js", "Go (Golang)"],
    summary:
      "Build the server side of applications — APIs, databases and business logic — in your choice of Java, Node.js or Go.",
  },
  {
    slug: "mobile-application-development",
    title: "Mobile App Development",
    category: "Software Engineering",
    image: android,
    modes: ["virtual"],
    api: "mobile-application-development",
    summary:
      "Build apps for iOS and Android from a single codebase with Flutter and Dart.",
  },
  {
    slug: "frontend-web-development",
    title: "Front-End Development",
    category: "Software Engineering",
    image: frontend,
    modes: ["virtual"],
    api: "frontend-web-development",
    summary:
      "Build fast, accessible websites and web apps with HTML, CSS and JavaScript.",
  },
  {
    slug: "product-management",
    title: "Product Management",
    category: "Business & Product",
    image: productManagement,
    modes: ["virtual"],
    api: "product-management",
    summary:
      "Guide a product from strategy through development, launch, ongoing support and improvement.",
  },
  {
    slug: "product-designing-ui-ux",
    title: "Product Design (UI/UX)",
    category: "Business & Product",
    image: product,
    modes: ["virtual"],
    api: "product-designing-ui-ux",
    summary:
      "Research users, design interfaces and prototype products that meet real user needs and business goals.",
  },
];

export const coursesByMode = (mode) => courses.filter((c) => c.modes.includes(mode));

export const courseHref = (slug, mode) =>
  `/course-detail-graduate?course=${slug}${mode ? `&mode=${mode}` : ""}`;

export const findCourse = (slug) =>
  courses.find((c) => c.slug === slug || (c.aliases || []).includes(slug));

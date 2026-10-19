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
// aliases: old slugs that should still open this course (e.g. ?course=java).
// icon:    used when there's no course artwork.

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
    title: "Cybersecurity",
    category: "Cloud & Security",
    image: cybersecurity,
    modes: ["onsite"],
    api: "cybersecurity",
    summary:
      "Security fundamentals, ethical hacking and penetration testing, and how to defend systems, networks and data.",
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
      "Clean and explore data, build charts and dashboards, and turn the numbers into decisions.",
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
      "Work out what a business actually needs, write it up as requirements, then plan and deliver the project.",
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
      "Deploy, secure and scale applications on AWS.",
  },

  // Virtual
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
      "APIs, databases and server logic, in Java, Node.js or Go. You pick the stack.",
  },
  {
    slug: "mobile-application-development",
    title: "Mobile App Development",
    category: "Software Engineering",
    image: android,
    modes: ["virtual"],
    api: "mobile-application-development",
    summary:
      "Build iOS and Android apps from one codebase with Flutter and Dart.",
  },
  {
    slug: "frontend-web-development",
    title: "Front-End Development",
    category: "Software Engineering",
    image: frontend,
    modes: ["virtual"],
    api: "frontend-web-development",
    summary:
      "HTML, CSS and JavaScript, from your first page to a working web app.",
  },
  {
    slug: "product-management",
    title: "Product Management",
    category: "Business & Product",
    image: productManagement,
    modes: ["virtual"],
    api: "product-management",
    summary:
      "Decide what to build, work with designers and engineers, and see a product through launch.",
  },
  {
    slug: "product-designing-ui-ux",
    title: "Product Design (UI/UX)",
    category: "Business & Product",
    image: product,
    modes: ["virtual"],
    api: "product-designing-ui-ux",
    summary:
      "Talk to users, design screens in Figma and prototype products people find easy to use.",
  },
];

export const coursesByMode = (mode) => courses.filter((c) => c.modes.includes(mode));

export const courseHref = (slug, mode) =>
  `/course-detail-graduate?course=${slug}${mode ? `&mode=${mode}` : ""}`;

export const findCourse = (slug) =>
  courses.find((c) => c.slug === slug || (c.aliases || []).includes(slug));

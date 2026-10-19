// FAQ content, grouped by topic. Shown on /faq, the home page and the pricing page.
// Answers that list courses, dates or the address are built from the other
// data files, so they stay correct when those change.
import { coursesByMode } from "./courses";
import { announcement, contact } from "./site";

const list = (items) => items.map((c) => c.title).join(", ");

export const faqGroups = [
  {
    topic: "Admissions",
    icon: "admissions",
    blurb: "Applying, eligibility and getting started",
    items: [
      {
        q: "What is your application process like?",
        a: "It happens online in two steps. Create an account, then fill in the application form on our platform. It takes a few minutes and ends with a short assessment test.",
        link: { to: "/signup", label: "Start an application" },
      },
      {
        q: "When does the next cohort start?",
        a: announcement.text || "Call or WhatsApp us for the next start date.",
      },
      {
        q: "What level of experience do I need?",
        a: "None. The courses work for complete beginners as well as people who already know a bit.",
      },
      {
        q: "Can I enroll as an undergraduate?",
        a: "Yes. Check that the course fits around your school timetable: physical courses run on campus for six months, virtual courses run online for three.",
      },
      {
        q: "Do I have to be physically present to register?",
        a: "No, you register online. You're welcome to visit and talk to the admissions team in person if you'd like.",
      },
      {
        q: "Can I take two courses at a time?",
        a: "We strongly advise against it. One course takes your full attention.",
      },
    ],
  },
  {
    topic: "Courses",
    icon: "courses",
    blurb: "What we teach, where, and how",
    items: [
      {
        q: "Which courses do you offer?",
        a: `Physical classes in Abeokuta: ${list(coursesByMode("onsite"))}. Live online: ${list(coursesByMode("virtual"))}.`,
        link: { to: "/courses", label: "See all courses" },
      },
      {
        q: "Which course is right for me?",
        a: `Call or WhatsApp us on ${contact.phone}. Tell us what you're aiming for and we'll suggest a course. You can also book a free 30-minute call with our program manager.`,
        link: { href: contact.calendly, label: "Book a call" },
      },
      {
        q: "Are classes virtual or physical?",
        a: "It depends on the course. Some run at our Abeokuta campus and others run live online. Each course page says which.",
      },
      {
        q: "Where are the physical classes held?",
        a: `At PROHUB: ${contact.address.join(" ")}`,
        link: { to: "/contact", label: "Get directions" },
      },
      {
        q: "Do you have a program for SIWES students?",
        a: "Yes. Our IT program is for undergraduates on industrial training (SIWES). It runs for six months, fully on campus, and ends with a certificate.",
        link: { to: "/it", label: "About the IT program" },
      },
    ],
  },
  {
    topic: "Learning",
    icon: "learning",
    blurb: "Classes, instructors and what you'll need",
    items: [
      {
        q: "How long is each program?",
        a: "Physical courses run for six months: four months of training, then two months building a real project. Virtual courses run for three months.",
      },
      {
        q: "How are the courses taught?",
        a: "Virtual classes are live, with readings, quizzes and projects in between. Physical classes happen at the academy, with assignments, assessments and projects.",
      },
      {
        q: "What qualifications do your instructors have?",
        a: "Our instructors are experienced professionals from the tech industry, and every student also gets one-to-one time with a mentor.",
      },
      {
        q: "Do I need any materials to succeed?",
        a: "You'll need a laptop and an internet connection. A few courses need more than that, and we'll tell you before you start.",
      },
    ],
  },
  {
    topic: "Fees & payment",
    icon: "fees",
    blurb: "Tuition, installments and other costs",
    items: [
      {
        q: "How much does it cost to learn at Grazac Academy?",
        a: "It depends on the course. The pricing page lists the current plans for physical and virtual courses.",
        link: { to: "/pricing", label: "View pricing" },
      },
      {
        q: "Do all courses cost the same?",
        a: "No. Physical and virtual courses are priced differently, and Cloud Engineering and Cybersecurity have their own plan.",
      },
      {
        q: "Can I pay in installments?",
        a: "Yes. You can pay in full or spread the fee over monthly installments. Our admissions team can talk you through the options.",
      },
      {
        q: "Are there any fees besides tuition?",
        a: "There's a ₦10,000 application fee. After that you only pay tuition.",
      },
    ],
  },
  {
    topic: "Certificates & careers",
    icon: "careers",
    blurb: "What you leave with",
    items: [
      {
        q: "Do you offer a certificate after the course?",
        a: "Yes. When you finish, you get a certificate in print and a digital copy you can share online. Our programs are accredited by the American Council of Training and Development (ACTD).",
      },
      {
        q: "Will the academy get me a job?",
        a: "We can't promise you a job. We do share openings with students and help with CV reviews, soft skills and salary negotiation.",
      },
    ],
  },
];

export const allFaqs = faqGroups.flatMap((g) => g.items);

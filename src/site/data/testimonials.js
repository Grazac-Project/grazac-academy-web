// Testimonials shown in the "What people say" rows on the home page.
//
// HOW TO EDIT
//   quote   The testimonial.
//   name    The person's name.
//   role    Their course or job title.
//   photo   Optional. Import an image from ../img/avatars and set it here.
//           Without a photo the card shows a placeholder silhouette.
//   sample  true = placeholder content. Samples show while you work locally
//           (npm start) but are left out of the live build, so a made-up
//           testimonial can never go live. Replace each one with a real
//           testimonial and delete `sample: true`.
//
// Entries without `sample` are real people's words. Only spelling and
// punctuation have been tidied; don't reword them.

export const testimonials = [
  {
    name: "Keep Up",
    role: "Grazac Academy student",
    quote:
      "I can boldly say that Grazac Academy is the best tech academy you can enroll in to take you from 0 to 100 in your tech career. I'm glad I took that decision, which has altered the trajectory of my whole life. I would definitely recommend it to anyone.",
  },
  {
    sample: true,
    name: "Sample: Data Analytics graduate",
    role: "Data Analyst",
    quote:
      "Before Grazac I had never written a formula in Excel. By the end of the course I had built three dashboards from real company data and walked an interviewer through every one of them.",
  },
  {
    name: "Samson Adedamola",
    role: "Consultant at Kudi",
    quote:
      "I've known Grazac for over a year now and, having worked with some of their successful students, I can boldly say the competency and problem-solving skills of their students are top-notch. Their academy is one of the best promoting technology skills acquisition here in Nigeria.",
  },
  {
    sample: true,
    name: "Sample: Product Design graduate",
    role: "UI/UX Designer",
    quote:
      "My mentor reviewed every screen I designed and told me exactly what to fix. The final project became the main case study in my portfolio, and it's what got me my first interview.",
  },
  {
    name: "Adejoke Oyeyemi",
    role: "Grazac Academy student",
    quote:
      "What is a bootcamp without internship and mentorship? Grazac Academy provides both, and also the real-world experience. It will always be Grazac all year.",
  },
  {
    sample: true,
    name: "Sample: Cybersecurity student",
    role: "Cybersecurity, physical class",
    quote:
      "The labs were the best part. We practised on real setups instead of slides, and when something broke there was always an instructor nearby to explain why.",
  },
  {
    sample: true,
    name: "Sample: Front-End graduate",
    role: "Front-End Developer",
    quote:
      "I took the virtual class while working full time. The live sessions fitted around my job, and I finished with a website I was proud to show employers.",
  },
  {
    sample: true,
    name: "Sample: Cloud Engineering graduate",
    role: "Cloud Engineer",
    quote:
      "I came from a non-tech background and was nervous about the assessment. Six months later I was deploying applications on AWS with my project team.",
  },
  {
    sample: true,
    name: "Sample: Business Analysis graduate",
    role: "Business Analyst",
    quote:
      "I finally understand how to turn a messy business problem into clear requirements. My team lead says my documentation is the easiest to follow on the project.",
  },
  {
    sample: true,
    name: "Sample: Product Management graduate",
    role: "Associate Product Manager",
    quote:
      "Working with designers and engineers on a real project taught me more than any book. I left knowing how to run a sprint and how to say no to a feature.",
  },
].filter((t) => !t.sample || process.env.NODE_ENV !== "production");

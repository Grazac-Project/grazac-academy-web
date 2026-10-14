// Frequently asked questions, grouped by topic.
// Answers are taken from the previous FAQ page, with duplicates removed.

export const faqGroups = [
  {
    topic: "Admissions",
    items: [
      {
        q: "What is your application process like?",
        a: "It's a two-step online process. First, create an account. You'll then be taken to our application platform to complete your application, which takes a few minutes and includes an assessment test.",
      },
      {
        q: "What level of experience do I need?",
        a: "None. Our courses cater to people with varying levels of experience, from complete beginners to advanced learners.",
      },
      {
        q: "Can I enroll as an undergraduate?",
        a: "Yes. As an undergraduate, we strongly advise you to choose the virtual or onsite learning mode that best fits your school schedule.",
      },
      {
        q: "Do I have to be physically present to register?",
        a: "No, registration is done online. If you'd like more clarity, you can also speak with our admissions team onsite.",
      },
      {
        q: "Which course is right for me?",
        a: "Call us or send a WhatsApp message on +234 806 836 5951 and our team will help you choose the best course for your goals.",
      },
      {
        q: "Can I take two courses at a time?",
        a: "No. This is strongly discouraged — we want you fully focused and dedicated to the course you choose.",
      },
    ],
  },
  {
    topic: "Learning",
    items: [
      {
        q: "Are classes virtual or onsite?",
        a: "Both. You choose the mode that suits you: onsite at our Abeokuta campus, or virtual from anywhere.",
      },
      {
        q: "How long is each program?",
        a: "Onsite programs run for 6 months (4 months of immersive training and 2 months building a real project). Virtual programs run for 3 months. Check each course page for details.",
      },
      {
        q: "How are the courses taught?",
        a: "Virtual classes are taught live, combined with content, readings, quizzes and projects. Onsite classes are taught at the academy by qualified instructors, with assignments, assessments and projects.",
      },
      {
        q: "What qualifications do your instructors have?",
        a: "All our instructors are experienced professionals with a proven track record in the tech industry.",
      },
      {
        q: "Do I need any materials to succeed?",
        a: "Most courses require a laptop and an internet connection. Some courses need additional materials, which we'll tell you about before you start.",
      },
    ],
  },
  {
    topic: "Fees & payment",
    items: [
      {
        q: "How much does it cost to learn at Grazac Academy?",
        a: "It depends on the course and the learning mode. See our pricing page for current plans.",
        link: { to: "/pricing", label: "View pricing" },
      },
      {
        q: "Do all courses cost the same?",
        a: "No. The price varies with the course you choose and the mode of learning (virtual or onsite).",
      },
      {
        q: "Can I pay in installments?",
        a: "Yes. You can pay upfront or choose an installment plan that splits the fee into manageable monthly payments. Contact our admissions team to find the plan that works best for you.",
      },
      {
        q: "Are there any fees besides tuition?",
        a: "You make two payments: a ₦10,000 application fee, and your tuition fee (which depends on the course you choose).",
      },
    ],
  },
  {
    topic: "Certificates & careers",
    items: [
      {
        q: "Do you offer a certificate after the course?",
        a: "Yes. Students who complete a course receive a certificate of completion in both digital and printed formats. Our programs are accredited by the American Council of Training and Development (ACTD).",
      },
      {
        q: "Will the academy get me a job?",
        a: "We don't guarantee jobs, but we connect students with job opportunities and provide placement support such as CV reviews, soft-skills training and salary negotiation sessions.",
      },
    ],
  },
];

export const allFaqs = faqGroups.flatMap((g) => g.items);

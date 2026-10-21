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

import abikoyeMercy from "../img/avatars/abikoye-mercy.jpg";
import farmerAretola from "../img/avatars/farmer-aretola.jpg";
import oluwatosinKennedy from "../img/avatars/oluwatosin-kennedy.jpg";
import johnMichael from "../img/avatars/john-michael.jpg";
import jamesTolulope from "../img/avatars/james-tolulope.jpg";

export const testimonials = [
  {
    name: "Abikoye Mercy",
    role: "Data Analysis, Cohort 18",
    photo: abikoyeMercy,
    quote:
      "Honestly, I came into Grazac Academy with zero tech experience and no idea where to start. The instructors were patient. The hands-on training, supportive instructors and practical projects gave me real skills and the confidence to grow. I'd gladly recommend it to anyone starting out in tech.",
  },
  {
    name: "Oluwatosin Kennedy",
    role: "Software Engineering, Cohort 17",
    photo: oluwatosinKennedy,
    quote:
      "Before Grazac Academy, backend felt like magic I'd never understand. Now I build APIs and work with databases without panicking, and the learning environment is very conducive. If you want to get into backend, start here. No regrets at all.",
  },
  {
    name: "Iyiola Temitayo",
    role: "Product Design, Cohort 16",
    quote:
      "I always loved design but didn't know how to turn it into a career. Grazac Academy taught me user research, wireframing and prototyping, and now I have a portfolio I'm proud of. It's the best step I've taken as a product designer. 10/10.",
  },
  {
    name: "Farmer Aretola",
    role: "Data Analysis, Cohort 18",
    photo: farmerAretola,
    quote:
      "Studying data analysis at Grazac Academy has changed the way I farm. I now make better-informed decisions, monitor my crops and expenses with confidence, and achieve stronger yields. I'd happily recommend it to any farmer who wants better results.",
  },
  {
    name: "Aborisede Obaloluwa",
    role: "Cybersecurity, Cohort 18",
    quote:
      "Grazac Academy broke everything down step by step, from threats to real defense practice. I had zero security background, and honestly I was nervous. Now I can spot vulnerabilities and I'm excited about my future in cybersecurity. Thank you, Grazac.",
  },
  {
    name: "John Michael",
    role: "Data Analysis, Cohort 17",
    photo: johnMichael,
    quote:
      "Grazac Academy is the best place to study any tech course of your choice. You are really going to learn from the best if you sign up for any of their courses. I took the data analysis course and all I can say is the instructor is a very good teacher. He teaches well, to your understanding, and I'm grateful to be a product of this great academy.",
  },
  {
    name: "Ololade Islamiat",
    role: "Software Engineering, Cohort 17",
    quote:
      "Grazac Academy took me from writing my first line of code to building full projects I'm proud of. The instructors never made me feel behind, and the support was real. Software engineering finally feels possible for me. I'd recommend it to anyone.",
  },
  {
    name: "James Tolulope",
    role: "Data Analysis, Cohort 17",
    photo: jamesTolulope,
    quote:
      "Grazac gets 5 stars from me. It's a wonderful place to learn and unlearn, and the team is so welcoming. Even after my training ended, I was still able to use their workspace.",
  },
  {
    name: "Keep Up",
    role: "Grazac Academy student",
    quote:
      "I can boldly say that Grazac Academy is the best tech academy you can enroll in to take you from 0 to 100 in your tech career. I'm glad I took that decision, which has altered the trajectory of my whole life. I would definitely recommend it to anyone.",
  },
  {
    name: "Samson Adedamola",
    role: "Consultant at Kudi",
    quote:
      "I've known Grazac for over a year now and, having worked with some of their successful students, I can boldly say the competency and problem-solving skills of their students are top-notch. Their academy is one of the best promoting technology skills acquisition here in Nigeria.",
  },
  {
    name: "Adejoke Oyeyemi",
    role: "Grazac Academy student",
    quote:
      "What is a bootcamp without internship and mentorship? Grazac Academy provides both, and also the real-world experience. It will always be Grazac all year.",
  },
].filter((t) => !t.sample || process.env.NODE_ENV !== "production");

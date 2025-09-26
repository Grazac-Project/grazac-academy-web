/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,

  content: [
    // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/pages/web3-application/web3.{js,jsx}",
    "./src/pages/web3-application/form.{js,jsx}",
    "./src/pages/web3-application/payment.{js,jsx}",
    "./src/pages/web3-application/start.{js,jsx}",
    "./src/pages/web3-application/successModal.{js,jsx}",
    "./src/pages/web3-application/failedModal.{js,jsx}",
    "./src/pages/physical-dashboard/Dashboard.js",
    "./src/pages/physical-dashboard/ApplicationForm.js",
    ".src/components/dashboard/not-submitted/index.js",
    "./src/pages/graduateCohort/dashboard/Main.js",
    "./src/components/dashboard/Details.js",
    "./src/components/Assessment.js",
  ],
  theme: {
    animation: {
      spin: "spin 10s linear infinite",
    },
    extend: {
      fontFamily: {
        mont: ["var(--font-montserrat)"],
      },
      screens: {
        "2xl": { max: "1535px" },
        laptop: { max: "1440px" },
        xxl: { max: "1300px" },
        xl: { max: "1200px" },
        lgx: { max: "1024px" },
        lg: { max: "900px" },
        md: { max: "768px" },
        sm: { max: "639px" },
        xm: { max: "467px" },
        xxm: { max: "420px" },
        xxxm: { max: "415px" },
        xxxxm: { max: "390px" },
        ssxm: { max: "360px" },
        sxm: { max: "350px" },
        small: { max: "767px" },
        // min breakpoints (new, like Tailwind defaults)
        minsm: "640px",
        minmd: "768px",
        minlg: "1024px",
        minxl: "1280px",
        min2xl: "1536px",
      },
      colors: {
        primary: "#773DD3",
        text: "#787676",
        heading: "#1D1E2C",
      },
    },
  },
  plugins: [],
};

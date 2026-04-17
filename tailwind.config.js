/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    animation: {
      spin: "spin 10s linear infinite",
    },
    extend: {
      fontFamily: {
        sans: ["Rajdhani", "sans-serif"],
        mont: ["var(--font-montserrat)"],
        rajdhani: ["Rajdhani", "sans-serif"],
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
        minlg: "1024px",
        c: "768px",
        minsm: "639px",
        minxm: "468px",
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

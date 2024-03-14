/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        footer: "repeat(auto-fit, minmax(175px, 1fr))",
      },
      boxShadow: {
        video: "inset 0px -100px 70px rgba(0, 0, 0, 0.9)",
        mobile: "inset 0px -10px 10px rgba(0, 0, 0, 0.9)",
      },
    },
  },
  plugins: [],
};

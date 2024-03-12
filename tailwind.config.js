/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        footer: "repeat(auto-fit, minmax(175px, 1fr))",
      },
    },
  },
  plugins: [],
};

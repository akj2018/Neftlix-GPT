/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        footer: "repeat(auto-fit, minmax(175px, 1fr))",
        videocards: "repeat(auto-fit, minmax(8rem, 1fr))",
      },
      boxShadow: {
        video: "inset 0px -100px 70px rgb(20, 20, 20)",
        mobile: "inset 0px -10px 10px rgb(20, 20, 20)",
        moviecard: "inset -1px -1px 15px 6px rgb(20, 20, 20)",
        header: "inset 0px 46px 20px 10px rgb(20, 20, 20, 0.5)",
        gpt: "inset 20px 20px 20px 20px rgb(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};

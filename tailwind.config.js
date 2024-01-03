/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#A89D92",
        secondary: "#4C392D",
        tertiary: "#9E8472",
        "black-100": "#512E1B",
        "black-200": "#512E1B",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #512E1B",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
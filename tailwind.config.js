/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wider: ".05em",
      widest: ".25em",
    },
    colors: {
      orangeColor: "#F05D23", // orange
      lightOrange: "#FA7921", // lightorange
      blueGreen: "#17BEBB", // blue-green
      darkGreen: "#00715d", // Dark-Green*
      yellow: "#ffc107", // Yellow *
      lightYellow: "#F0D891", // LightYellow *
      seaGreen: "#69DC9E", // sea-green
      txtColor: "#1D1E2C", // black/ slate
      bgColor: "#FDF7FA", // off-white
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [require("daisyui")],
};

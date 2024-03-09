/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        georgia: ["Georgia", "Arial", "sans-serif"],
      },
      minHeight: {
        "8/12": "66.666667%",
      },
      height: {
        "1/10": "10%",
        "12per": "12%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667% ",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%%",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        fadeOutUp: {
          "0%": { transform: "translate(0,0)" },
          "100%": { transform: "translate(0,-100vh)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        fadeOutUp: "fadeOutUp 1s 2s ease-in-out 1",
      },
      colors: {
        transparent02: "#00000033",
        transparent04: "#00000066",
        transparent06: "#00000099",
        transparent08: "#000000cc",
      },
    },
  },
  plugins: [],
};

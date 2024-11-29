/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode:"class",
  theme: {
    extend: {},
    colors: {
      "ground": "#ebecf0",
      "gound_dark": "black",
      "chrome_purple": "#78818e",
      "chrome_blue": "#9bb5fa",
      "chrome_pink": "#f88abo",
      "white": "#fff",
      "black": "#000",
      "silver": "silver",
      "grey": "grey",
      "pink": "#0ff",

      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      bluegray: colors.blueGray,
      coolgray: colors.coolGray,
      truegray: colors.trueGray,
      warmgray: colors.warmGray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    },
    boxShadow: {
      "chrome1": "0px 5px 15px 7px rgba(0,0,0, 0.3), 0px -7px 10px 8px rgba(255,255,255, 1)",
      "chrome2": "0px 8px 10px rgba(0,0,0, 0.2), 0px -8px 10px rgba(255,255,255, 0.8)",
      "chrome2_dark": "0px 8px 10px rgba(0,0,0, 0.2), 0px -8px 10px rgba(155, 181, 250, 0.8)",
      "chrome_hover": "0px 8px 10px rgba(0,0,0, 0.2), -0px -8px 10px rgba(255,255,255, 0.8), inset 0px 6px 10px rgba(0,0,0, 0.2), inset 0px -6px 10px rgba(255,255,255, 0.8)",
      "chrome_hover_button": "0px 8px 10px rgba(0,0,0, 0.2), -0px -8px 10px rgba(255,255,255, 0.8), inset 0px 6px 10px rgba(0,0,0, 0.2), inset 0px -6px 10px rgba(129, 164, 255, 0.8)",
      "chrome_hover_button_dark": "0px 8px 10px rgba(0,0,0, 0.2), -0px -8px 10px rgba(58, 57, 59, 0.8), inset 0px 6px 10px rgba(0,0,0, 0.2), inset 0px -6px 10px rgba(129, 164, 255, 0.8)"
    }
  },
  plugins: [],
}


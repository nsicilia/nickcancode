const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-shrikhand)", ...fontFamily.serif],
      },
      colors: {
        "ncc-dark": "#2F4858",
        "ncc-medium": "#465A79",
        "ncc-plum": "#6C6A96",
        "ncc-levender": "#6C6A96",
        "ncc-dark-pink": "#CF83B3",
        "ncc-bakermiller": "#FF91AF",
      },
    },
  },
  plugins: [],
};

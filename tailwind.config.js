/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      heading: ["DM\\ Serif\\ Display", "serif"],
    },
    colors:{
      gray:{
        400:"#61F1FF",
        700:"#6FFFE0",
        800:"#6FFFE0",
        900:"#17ad94"
      },
      blue:{
        500:"#f5f5f5"
      },
      white:"#ffffff"

    },
    green:{
      300:"#d1d5db",
      500:"#ffffff"
    }
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode:'class',
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1024px',
      '2xl' : '1024px',
    },
    extend: {
      fontFamily: 
      {
        gemunu: ["Gemunu Libre", 'serif'], 
        open: ["Open Sans", "serif"]
      },
      colors: {
        "gega-red" : "#BC1A45",
        "gega-melon" : "#FFD369",
        "gega-grey" : "#DDDDDD",
        "gega-white" : "#F7F7F7",
      },
      spacing: {
        "128" : "32rem",
      }
    },
  },
  plugins: [],
}


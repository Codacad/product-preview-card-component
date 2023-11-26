/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Montserrat:['"Montserrat"', 'sans-serif'],
        Fraunces:['"Fraunces"', 'serif']
      },
      backgroundColor:{
        appBackground:'hsl(30, 38%, 92%)',
        reviewComponentBackground:"hsl(0, 0%, 100%)",       
        cream:"hsl(30, 38%, 92%)",
        darkCyan:"hsl(158, 36%, 37%)"
      },
      colors:{
        veryDarkBlue:"hsl(212, 21%, 14%)",
        darkGrayishBlue:"hsl(228, 12%, 48%)",
        darkCyan:"hsl(158, 36%, 37%)"
      }
    },
  },
  plugins: [],
}
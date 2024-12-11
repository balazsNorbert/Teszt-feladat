/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        'headerImage': "url('/src/assetek/jpg/security-camera-with-glass-building-background.jpg')",
        'darkBackground': "url('/src/assetek/jpg/DarkBackground.jpg')",
      },
      colors: {
        'orangeCustom': '#EF7C00',
        'bgColor': '#262C45',
        'darkBgColor': '#242A47',
        'lightBlue': '#A9C2E7',
      },
      padding: {
        'navPadding': '14px',
    },
  },
  plugins: [],
  }
}


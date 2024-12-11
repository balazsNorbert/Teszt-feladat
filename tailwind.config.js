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
      },
      colors: {
        'orangeCustom': '#EF7C00',
      },
      padding: {
        'navPadding': '14px',
    },
  },
  plugins: [],
  }
}


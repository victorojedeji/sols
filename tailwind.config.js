/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-desktop': "url('/src/Assets/header/hero/hero-img-desktop.jpg'))",
        'hero-mobile-tab': "url('/src/Assets/header/hero/hero-img-mobile-tab.jpg'))",
      }
    },
  },
  plugins: [],
}


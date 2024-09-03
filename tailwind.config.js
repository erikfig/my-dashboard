const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      ...colors,
      danger: '#e74c3c',
      warning: '#f1c40f',
      success: '#2ecc71',
      info: '#3498db',
      grey: '#dce5eb',
      dark: '#232323',
      light: '#ecf0f1',
      primary: '#e74c3c',
      secondary: '#3498db',
    },
    extend: {
      gridTemplateColumns: {
        wrapper: '300px 1fr',
      },
      gridTemplateRows: {
        nav: '82px 1fr',
      }
    },
  },
  safelist: [
    '!bg-danger',
    '!bg-warning',
    '!bg-success',
    '!bg-info',
  ],
  plugins: [],
}
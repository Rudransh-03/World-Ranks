/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgBlack': '#1B1D1F',
        'tableCard': '#282B30',
        'lightGrey': '#6C727F',
      },
    },
  },
  plugins: [],
}
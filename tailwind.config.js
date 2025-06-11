/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700',
        orange: '#FFA500',
        papayawhip: '#FFEFD5',
        relblack: '#181818', // "relative black"
      },
    },
  },
  plugins: [],
}

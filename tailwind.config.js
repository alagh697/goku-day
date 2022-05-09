module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Rajdhani'],
        title: ['Saiyan'],
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
}

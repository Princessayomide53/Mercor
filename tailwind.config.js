/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'pro' : '912px',
        'mac' : '1440px',
        'mini':  '820px',
        'se': '375px',
        'galaxy': '360px',
        'app5': '320px',
        'fold': '280px',
        'duo': '540px'
      }
    },
  },
  plugins: [],
}
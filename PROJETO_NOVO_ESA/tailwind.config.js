/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'army-green': '#2C4D35',
        'army-green-light': '#3A6346',
        'army-green-dark': '#1F3626',
        'brazil-green': '#009C3B',
        'brazil-yellow': '#FFDF00',
        'brazil-blue': '#002776',
        'brazil-blue-dark': '#001D5D',
      },
      fontFamily: {
        'military': ['Roboto Condensed', 'Arial Narrow', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
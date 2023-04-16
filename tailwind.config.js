/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E7E4E6',
        secondary: '#37323E',
        accent: '#EC9A29',
        label: '#A3A3A3',
        logo: '#0F8B8D',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'headerDownShadow': '0px 5px 10px rgba(160, 160, 160, 0.25)',
      },
    },
  },
  plugins: [],
}
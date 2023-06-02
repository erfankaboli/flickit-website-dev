/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        primary:'#666AF6',
        ['primary-dark']:'#433DC4',
        ['primary-darker']:'#292752',
        secondary:'#80BB9C'
      }
    },
  },
  plugins: [],
}

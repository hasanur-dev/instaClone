/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ' "Nunito Sans", sans-serif',
    },
    extend: {
      fontFamily: {
        accent: '"Cookie", cursive',
      },
      screens: {
        mobile: '400px',
      },
    },
  },
  plugins: [],
}

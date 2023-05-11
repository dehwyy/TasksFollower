/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "light-gray": "#D4D4D4",
      },
      screens: {
        vsm: { max: '470px' },
        usm: { max: '380px' },
        uusm: { max: '310px' },
      },
    },
    screens: {
      lg: { max: '1023px' },
      premd: { max: '800px' },
      md: { max: '767px' },
      sm: { max: '639px' },
    },
  },
  plugins: [],
}

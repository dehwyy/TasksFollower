/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        forShadowYellow: 'rgba(255, 169, 76, 1)',
        forShadowBlue: 'rgba(29,185,197,1)',
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

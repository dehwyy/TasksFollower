/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      boxShadow: {
        unselectedSelected: '1px 1px 2px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        yellowPale: 'rgba(255, 169, 76, 1)',
        bluePale: 'rgba(29,185,197,1)',
        backgroundColor: 'rgb(17, 24, 39)',
        backgroundColorSecond: 'rgb(77,68,90)',
        pinkLight: 'rgb(255, 214, 235)',
        pinkPale: 'rgb(179,125,158)',
        pinkPaleLighter: 'rgb(216,150,189)',
        violetLight: 'rgb(167 127 205)',
        violetLightBorder: 'rgb(177 133 255)',
        violetLightPaler: 'rgb(123 93 151)',
        violetPale: 'rgba(255, 187, 221, 0.1)',
        violetLighter: 'rgba(230,168,199, 0.2)',
        violetBorderPale: 'rgba(230, 168, 199, 0.1)',
        violetBorderLighter: 'rgba(230,168,199, 0.5)',
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

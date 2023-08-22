/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customBlue: '#50AAC1',
        customGreen: '#7EB245',
        customDarkBlue: '#1C7EC1',
        customOrange: '#EF7642',
        customPink: '#D87E73',
        customLightBlue: '#B3B3D8',
        customSkyBlue: '#A2D8FF',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')",
        'nlw-gradient': 'linear-gradient(83deg, #9572FC 0%, #43E7AD 50.52%, #E1D55D 100%)',
      },
    },
  },
  plugins: [],
}
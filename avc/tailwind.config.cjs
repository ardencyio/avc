/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        bg: '#F7F7F7',
        text: '#181818',
        btn: '#353535',
      },

      fontFamily: {
        comfortaa: ['Comfortaa', 'cursive'],
        Plus:[" 'M PLUS 1' ", 'sans-serif'],
      },
    },
  },
  plugins: [],
}

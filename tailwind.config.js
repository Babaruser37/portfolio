/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      // Customizing standard fonts
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          bg: '#FDFDFD',   // Main site background
          pink: '#FDE9F3', // Button/accent color
        },
        gray: {
          950: '#030712', // Used for dark text like your name
        }
      },
    },
  },
  plugins: [],
}
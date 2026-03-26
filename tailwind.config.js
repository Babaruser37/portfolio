/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      // Customizing standard fonts
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // Or 'Geist Sans' if using Vercel's font
      },
      colors: {
        // Adding specific colors from the Sarah Chen design
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
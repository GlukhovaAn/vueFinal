/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue, html,jsx,ejs,js}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '.5rem'
      },
      /* deafults
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      }
        */
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1120px'
      }
    }
  },
  plugins: []
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : 'var(--primary)',
        dark : 'var(--dark)',
        pure : 'var(--pure)',
        grayText : 'var(--grayText)',
        lightBlue : 'var(--lightBlue)',
        primaryHover : 'var(--primaryHover)'
      }
    },
  },
  plugins: [],
}

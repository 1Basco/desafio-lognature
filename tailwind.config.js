/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-chakra": "#1A365D",
      },
      fontFamily: {
        schibstedGrotesk: ["Schibsted Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};

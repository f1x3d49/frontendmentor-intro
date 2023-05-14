/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        awhite: "hsl(var(--color-awhite) / <alpha-value>)",
        mgray: "hsl(var(--color-mgray) / <alpha-value>)",
        ablack: "hsl(var(--color-ablack) / <alpha-value>)",
      },
      fontFamily: {
        main: ["Epilogue", "sans-serif"],
      },
    },
  },
  plugins: [],
};

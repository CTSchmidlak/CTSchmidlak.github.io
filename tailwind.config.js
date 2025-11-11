/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],

  plugins: [require("@tailwindcss/typography")],

  theme: {
    extend: {
      keyframes: {
        stripe: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '200% 200%' },
        },
      },
      animation: {
        stripe: 'stripe 8s linear infinite',
      },
    },
  },
};
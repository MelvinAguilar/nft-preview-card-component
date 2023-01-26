/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        normal: "1.125rem",
      },
      colors: {
        "soft-blue": "hsl(215, 51%, 70%)",
        cyan: "hsl(178, 100%, 50%)",
        "very-dark-blue": "hsl(217, 54%, 11%)",
        "very-dark-blue-card": "hsl(216, 50%, 16%)",
        "very-dark-blue-line": "hsl(215, 32%, 27%)",
        "blue-hover": "hsl(185, 100%, 31%)",
      },
    },
  },
  plugins: [],
};

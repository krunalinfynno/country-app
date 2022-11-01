/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      "dark-mode-elements": "#2b3945",
      "dark-mode-bg": "hsl(207, 26%, 17%)",
      "light-mode-text": "hsl(200, 15%, 8%)",
      "light-mode-input": "hsl(0, 0%, 52%)",
      "light-mode-bg": "hsl(0, 0%, 98%)",
      "border-gray": "#e0e0e0",
      white: "hsl(0, 0%, 100%)",
    },
    extend: {},
  },
  plugins: [],
};

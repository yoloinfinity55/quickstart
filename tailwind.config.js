/** @type {import('tailwindcss').Config} */

// ...existing code...
module.exports = {
  content: [
    "./assets/notwatching/hugo_stats.json",
    "./layouts/**/*.html",
    "./themes/quickstart/layouts/**/*.html",
    "./content/**/*.md"
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': '#ff0000'
      }
    }
  },
  plugins: []
};
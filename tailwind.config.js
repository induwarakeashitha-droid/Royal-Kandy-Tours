// Builds css/tailwind.css for the site. Re-run after adding new Tailwind classes to any page:
//   npx tailwindcss@3.4.17 -i css/tailwind-input.css -o css/tailwind.css --minify
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    '!./CeylonCharm*.html',
    '!./royal-kandy-tours-home*.html',
    './js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#2C2B2A',
        muted: '#706E6B',
        line: '#EADCC9',
        sand: '#F5F2EB',
        pearl: '#FAF9F6',
        gold: '#D4AF37',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px rgba(0,0,0,0.06)',
        lift: '0 8px 32px rgba(0,0,0,0.10)',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.8s ease-out both',
      },
    },
  },
};

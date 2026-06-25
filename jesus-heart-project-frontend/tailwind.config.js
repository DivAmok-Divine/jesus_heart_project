/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette derived from the Jesus Heart Project logo
        brand: {
          50: '#fff1f1',
          100: '#ffe0e0',
          200: '#ffc7c7',
          300: '#ffa0a0',
          400: '#ff5f5f',
          500: '#f5272d',
          600: '#e11b22', // primary red
          700: '#bd1219',
          800: '#9c1318',
          900: '#81161a',
          950: '#46060a',
        },
        // Warm accent — "Humanity at Heart" warmth
        gold: {
          300: '#f8d27e',
          400: '#f3c14e',
          500: '#e8a33d', // warm amber accent
          600: '#c9821f',
        },
        // Warm ink (stone-based) instead of cool grey — humane, not corporate
        ink: {
          DEFAULT: '#1c1917',
          soft: '#44403c',
          muted: '#79716b',
        },
        // Warm paper neutrals
        cream: '#fbf6f0', // primary warm background
        sand: '#f3ebe1', // deeper warm tone for alternating sections / borders
      },
      fontFamily: {
        // Editorial serif headings + clean accessible body
        display: ['Fraunces', 'Georgia', 'serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        // Softer, warmer elevation
        card: '0 1px 2px rgba(28,25,23,0.04), 0 10px 30px -18px rgba(28,25,23,0.22)',
        lift: '0 2px 6px rgba(28,25,23,0.06), 0 20px 40px -22px rgba(28,25,23,0.30)',
        glow: '0 14px 40px -12px rgba(225, 27, 34, 0.40)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};

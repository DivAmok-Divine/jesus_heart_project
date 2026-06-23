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
        gold: {
          400: '#f6c453',
          500: '#f4b400', // warm accent
          600: '#d99a00',
        },
        ink: {
          DEFAULT: '#1a1a1a',
          soft: '#3d3d3d',
          muted: '#6b7280',
        },
        cream: '#fff9f9',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(0, 0, 0, 0.18)',
        glow: '0 12px 40px -10px rgba(225, 27, 34, 0.45)',
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

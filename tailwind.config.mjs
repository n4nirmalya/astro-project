/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdb,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'draw-grid': 'drawGrid 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-orb-1': 'floatOrb1 20s ease-in-out infinite',
        'float-orb-2': 'floatOrb2 25s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'text-reveal': 'textReveal 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        drawGrid: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        floatOrb1: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        floatOrb2: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1.05)' },
          '50%': { transform: 'translate(-40px, 40px) scale(0.9)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)', filter: 'drop-shadow(0 0 2px rgba(139, 92, 246, 0.3))' },
          '50%': { opacity: '1', transform: 'scale(1.2)', filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.7))' },
        },
        textReveal: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

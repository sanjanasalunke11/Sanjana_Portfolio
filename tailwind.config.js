/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        theme: {
          bg: '#090710',
          secondary: '#100B1C',
          card: '#171027',
          cardHover: '#201636',
          primary: '#7929DB',
          accent: '#A855F7',
          highlight: '#D8B4FE',
          text: '#F5F3FF',
          muted: '#9CA3AF',
          border: 'rgba(168, 85, 247, 0.2)',
          borderHover: 'rgba(168, 85, 247, 0.45)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(121, 41, 219, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(168, 85, 247, 0.7)' },
        }
      }
    },
  },
  plugins: [],
}

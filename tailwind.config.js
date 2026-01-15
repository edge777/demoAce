/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./pages/**/*.html"],
  theme: {
    extend: {
      colors: {
        emerald: {
          400: 'rgb(52 211 153)',
          500: 'rgb(16 185 129)',
          600: 'rgb(5 150 105)',
        },
        zinc: {
          800: 'rgb(39 39 42)',
          900: 'rgb(24 24 27)',
          950: 'rgb(9 9 11)',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '12px',
        'xl': '24px',
      },
    },
  },
  plugins: [],
}
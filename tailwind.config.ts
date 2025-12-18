import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ['var(--font-lora)', 'serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shooting: 'shooting 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        shooting: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(300px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-cyber-blue',
    'bg-cyber-pink',
    'bg-cyber-purple',
    'text-cyber-blue',
    'text-cyber-pink',
    'text-cyber-purple',
    'border-cyber-blue',
    'border-cyber-pink',
    'border-cyber-purple',
    {
      pattern: /(bg|text|border)-(cyber-blue|cyber-pink|cyber-purple)/,
      variants: ['hover', 'focus', 'group-hover'],
    },
  ],
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#00fff9',
        'cyber-pink': '#ff00ff',
        'cyber-yellow': '#f7f700',
        'cyber-purple': '#9600ff',
        'cyber-dark': '#0a0a0a',
        'cyber-gray': '#1a1a1a',
      },
      fontFamily: {
        cyber: ['Orbitron', 'sans-serif'],
        text: ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'blink': 'blink 1.4s infinite',
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        glow: {
          'from': { textShadow: '0 0 10px #00fff9, 0 0 20px #00fff9, 0 0 30px #00fff9' },
          'to': { textShadow: '0 0 20px #00fff9, 0 0 30px #00fff9, 0 0 40px #00fff9' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
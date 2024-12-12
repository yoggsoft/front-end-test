import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        transparent: 'transparent',
        current: 'currentColor',
        'grey': '#e3e6f1',
        'grey-light': '#f1f2f8',
        'grey-extra-light': '#f7f9ff',
        'green': '#00a651',
        'lime': '#eefca0',
        'emerald': '#8cc44d',
        'sky': '#1c97f5',
        'magenta': '#e91e61',
        'orange': '#ff9800',
        'green-light': '#cceddc',
        'green-extra-light':'#f3fef8',
        'blue': '#00a651',
        'blue-light': '#e2e6ef',
        'blue-extra-light': '#f6f9ff',
        'red': '#ed6e5d',
        'red-light': '#ffcfc8',
        'red-extra-light': '#fcf3f'
      },
      backgroundImage: {
        stripe: 'repeating-linear-gradient(-45deg, #f7f9ff 0px, #f7f9ff 20px, #f1f2f8 20px, #f1f2f8 40px)'
      }
    },
  },
  plugins: [],
} satisfies Config;

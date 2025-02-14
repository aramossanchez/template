import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './layout/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primaryColor: 'var(--primaryColor)',
        primaryColorTransparent: 'var(--primaryColorTransparent)',
      },
      height: {
        headerHeight: 'var(--headerHeight)',
        bodyHeight: 'var(--bodyHeight)',
      },
      spacing: {
        headerHeight: 'var(--headerHeight)',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(90deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        showTopToCenter: {
          '0%': { transform: 'translateY(-50%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '100' },
        },
      },
      animation: {
        rotate: 'rotate 0.25s',
        showTopToCenter: 'showTopToCenter 1s',
      },
    },
  },
  plugins: [],
} satisfies Config;

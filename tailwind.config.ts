import type { Config } from 'tailwindcss';
import { MOBILE_WIDTH } from './utils/constants';

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
        secondaryColor: 'var(--secondaryColor)',
        tertiaryColor: 'var(--tertiaryColor)',
        quaternaryColor: 'var(--quaternaryColor)',
        primaryColorTransparent: 'var(--primaryColorTransparent)',
        whatsappColor: 'var(--whatsappColor)',
      },
      height: {
        headerHeight: 'var(--headerHeight)',
        headerHeightMobile: 'var(--headerHeightMobile)',
        bodyHeight: 'var(--bodyHeight)',
      },
      spacing: {
        headerHeight: 'var(--headerHeight)',
        headerHeightMobile: 'var(--headerHeightMobile)',
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
        showLeftToRight: {
          '0%': { transform: 'translateX(-50%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '100' },
        },
        showRightToLeft: {
          '0%': { transform: 'translateX(50%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '100' },
        },
      },
      animation: {
        rotate: 'rotate 0.25s',
        showTopToCenter: 'showTopToCenter 1s',
        showLeftToRight: 'showLeftToRight 1s',
        showRightToLeft: 'showRightToLeft 1s',
      },
      screens: {
        desktop: '1300px',
        mobile: { min: `${MOBILE_WIDTH}px` },
      },
    },
  },
  plugins: [],
} satisfies Config;

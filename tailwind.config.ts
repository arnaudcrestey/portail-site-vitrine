import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#192132',
        slate: '#5F6B85',
        mist: '#EEF4FF',
        cloud: '#F7F9FE',
        line: 'rgba(103, 123, 164, 0.18)',
        primary: '#3B63F3',
        secondary: '#7C6CF2',
        accent: '#DCE6FF',
      },
      boxShadow: {
        soft: '0 18px 60px rgba(48, 72, 132, 0.08)',
        card: '0 12px 40px rgba(44, 66, 118, 0.08)',
        glow: '0 24px 80px rgba(96, 113, 255, 0.16)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top left, rgba(124, 108, 242, 0.18), transparent 32%), radial-gradient(circle at top right, rgba(59, 99, 243, 0.14), transparent 28%), linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)',
      },
      maxWidth: {
        layout: '1240px',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'jacks-green': '#2EAE7D',
        'cream': '#FFF8E7',
        'deep-black': '#1A1A1A',
        'retro-orange': '#FF6B35',
        'retro-red': '#E63946',
        'retro-yellow': '#FFD23F',
      },
    },
  },
  plugins: [],
};
export default config;

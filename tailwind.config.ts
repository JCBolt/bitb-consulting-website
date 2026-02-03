import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2AACB8',
          50: '#E8F7F9',
          100: '#D1EFF2',
          200: '#A3DFE5',
          300: '#75CFD8',
          400: '#47BFCB',
          500: '#2AACB8',
          600: '#228A93',
          700: '#19676E',
          800: '#114549',
          900: '#082224',
        },
        accent: {
          DEFAULT: '#E9B44F',
          50: '#FDF8EE',
          100: '#FBF1DD',
          200: '#F7E3BB',
          300: '#F3D599',
          400: '#EFC777',
          500: '#E9B44F',
          600: '#D99A25',
          700: '#A7771C',
          800: '#755414',
          900: '#43300B',
        },
        dark: {
          DEFAULT: '#1E293B',
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        light: {
          DEFAULT: '#F8FAFC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: '#ffffff',
          dark: '#0a0a0a',
        },
        foreground: {
          light: '#0a0a0a',
          dark: '#ededed',
        },
        muted: {
          light: '#6b7280',
          dark: '#9ca3af',
        },
        accent: {
          light: '#3b82f6',
          dark: '#60a5fa',
        },
        border: {
          light: '#e5e7eb',
          dark: '#1f2937',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        content: '720px',
      },
      transitionDuration: {
        theme: '200ms',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '720px',
            color: 'inherit',
            a: {
              color: 'inherit',
              textDecoration: 'underline',
              textDecorationColor: '#3b82f6',
              '&:hover': {
                textDecorationColor: '#2563eb',
              },
            },
            h1: {
              color: 'inherit',
            },
            h2: {
              color: 'inherit',
            },
            h3: {
              color: 'inherit',
            },
            h4: {
              color: 'inherit',
            },
            strong: {
              color: 'inherit',
            },
            code: {
              color: 'inherit',
            },
            blockquote: {
              color: 'inherit',
              borderLeftColor: '#3b82f6',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-bright": "#f9f9ff",
        "tertiary-fixed-dim": "#bec7d3",
        "primary-fixed": "#d9e2ff",
        "primary-fixed-dim": "#afc6ff",
        "on-surface-variant": "#424754",
        "inverse-surface": "#0f2f5f",
        "on-primary-fixed-variant": "#004398",
        "surface-tint": "#0059c7",
        "inverse-primary": "#afc6ff",
        "on-primary-container": "#f0f2ff",
        "on-error-container": "#93000a",
        "surface-variant": "#d7e2ff",
        "primary-container": "#1769e0",
        "surface-container-lowest": "#ffffff",
        "on-tertiary-fixed-variant": "#3f4851",
        "on-primary-fixed": "#001a43",
        "on-surface": "#001b40",
        "on-tertiary-container": "#eaf3ff",
        "on-tertiary": "#ffffff",
        "surface-dim": "#cadaff",
        "inverse-on-surface": "#ecf0ff",
        "error": "#ba1a1a",
        "outline": "#727785",
        "primary": "#0051b6",
        "secondary-container": "#2170e4",
        "on-secondary-container": "#fefcff",
        "on-tertiary-fixed": "#141c25",
        "error-container": "#ffdad6",
        "on-secondary-fixed-variant": "#004395",
        "secondary": "#0058be",
        "surface-container": "#e8eeff",
        "tertiary": "#4e5761",
        "outline-variant": "#c2c6d6",
        "on-secondary-fixed": "#001a42",
        "surface-container-highest": "#d7e2ff",
        "surface-container-low": "#f1f3ff",
        "background": "#f9f9ff",
        "surface-container-high": "#e0e8ff",
        "on-error": "#ffffff",
        "on-secondary": "#ffffff",
        "secondary-fixed-dim": "#adc6ff",
        "on-background": "#001b40",
        "tertiary-container": "#666f79",
        "on-primary": "#ffffff",
        "secondary-fixed": "#d8e2ff",
        "surface": "#f9f9ff",
        "tertiary-fixed": "#dae3ef",
        brand: {
          navy: "#0B2D5C",
          blue: "#1769E0",
          brightBlue: "#3B82F6",
          ice: "#EAF3FF",
          lightBg: "#F4F8FF",
        }
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "full": "9999px"
      },
      spacing: {
        "margin": "1.25rem",
        "margin-tablet": "2.5rem",
        "margin-desktop": "5rem",
        "gutter": "1.5rem",
        "gutter-desktop": "2rem",
        "space-2xs": "0.25rem",
        "space-xs": "0.5rem",
        "space-sm": "0.75rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2rem",
        "space-2xl": "3rem",
        "space-3xl": "4.5rem",
        "space-4xl": "6rem"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"]
      },
      fontSize: {
        'caption': ['0.8125rem', { lineHeight: '1.4', letterSpacing: '0.01em' }], // 13px
        'caption-sm': ['0.75rem', { lineHeight: '1.35', letterSpacing: '0.04em' }], // 12px
        'nav': ['0.90625rem', { lineHeight: '1.25', letterSpacing: '0' }], // 14.5px
        'btn': ['0.90625rem', { lineHeight: '1.25', letterSpacing: '0.01em' }], // 14.5px
        'body-sm': ['0.875rem', { lineHeight: '1.55', letterSpacing: '0' }], // 14px
        'body': ['1rem', { lineHeight: '1.625', letterSpacing: '-0.005em' }], // 16px
        'subheading': ['1.1875rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }], // 19px
        'card-title': ['1.3125rem', { lineHeight: '1.28', letterSpacing: '-0.015em' }], // 21px
        'section-title': ['2.125rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }], // 34px
        'page-title': ['2.375rem', { lineHeight: '1.18', letterSpacing: '-0.025em' }], // 38px
        'hero-title': ['2.875rem', { lineHeight: '1.15', letterSpacing: '-0.03em' }], // 46px
      },
      lineHeight: {
        'heading-tight': '1.15',
        'heading': '1.22',
        'heading-loose': '1.3',
        'body': '1.625',
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(11, 45, 92, 0.04), 0 12px 32px rgba(23, 105, 224, 0.05)',
        'blue-glow': '0 0 24px rgba(59, 130, 246, 0.35)',
        'elevated': '0 8px 30px rgba(11, 45, 92, 0.08)'
      }
    },
  },
  plugins: [],
}

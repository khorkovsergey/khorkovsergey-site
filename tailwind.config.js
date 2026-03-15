/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core surface system — deep layered darks
        base: '#0A0B0F',         // deepest background
        surface: '#0F1117',       // primary surface
        elevated: '#161821',      // cards, panels
        overlay: '#1C1F2B',       // hover states, overlays
        border: '#232736',        // subtle borders
        borderLight: '#2E3348',   // emphasized borders

        // Text hierarchy — silver/platinum scale
        textPrimary: '#E8ECF4',   // headings, key content
        textSecondary: '#9BA3B5', // body text
        textMuted: '#5C6478',     // labels, captions
        textGhost: '#363D50',     // very subtle text

        // Accent — electric teal (primary action color)
        accent: '#00D4AA',
        accentLight: '#33DFBE',
        accentDark: '#00A888',
        accentGlow: 'rgba(0, 212, 170, 0.15)',
        accentGlowStrong: 'rgba(0, 212, 170, 0.25)',

        // Secondary accent — warm gold for highlights
        gold: '#D4A855',
        goldLight: '#E0BD78',
        goldDark: '#B08A3A',

        // Status / domain colors — desaturated, premium
        domFinance: { DEFAULT: '#D4A855', light: 'rgba(212, 168, 85, 0.12)', border: 'rgba(212, 168, 85, 0.2)' },
        domOperations: { DEFAULT: '#7B8AB5', light: 'rgba(123, 138, 181, 0.12)', border: 'rgba(123, 138, 181, 0.2)' },
        domPlatform: { DEFAULT: '#5BA4E6', light: 'rgba(91, 164, 230, 0.12)', border: 'rgba(91, 164, 230, 0.2)' },
        domProduct: { DEFAULT: '#00D4AA', light: 'rgba(0, 212, 170, 0.12)', border: 'rgba(0, 212, 170, 0.2)' },
        domTransformation: { DEFAULT: '#B07AE6', light: 'rgba(176, 122, 230, 0.12)', border: 'rgba(176, 122, 230, 0.2)' },
        domFoundation: { DEFAULT: '#7B8494', light: 'rgba(123, 132, 148, 0.12)', border: 'rgba(123, 132, 148, 0.2)' },

        // Legacy aliases (so existing components don't break)
        cream: '#0A0B0F',
        warm: '#161821',
        sand: '#232736',
        charcoal: '#E8ECF4',
        graphite: '#C0C7D6',
        stone: '#9BA3B5',
        copper: '#00D4AA',
        copperLight: '#33DFBE',
        copperDark: '#00A888',
        mist: '#5C6478',
      },
      fontFamily: {
        display: ['DM Serif Display', 'Georgia', 'serif'],
        body: ['Onest', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1.05' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'content': '72rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(0, 212, 170, 0.1)',
        'glow-md': '0 0 40px rgba(0, 212, 170, 0.12)',
        'glow-lg': '0 0 60px rgba(0, 212, 170, 0.15)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.03)',
        'card-hover': '0 4px 20px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0, 212, 170, 0.1)',
      },
    },
  },
  plugins: [],
};

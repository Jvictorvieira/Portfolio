// tailwind.config.js
module.exports = {
    darkMode: 'class',
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors:{
          background:"rgba(var(--background))",
          border:"rgba(var(--border))",
          card:"rgba(var(--card))",
          "copy-primary":"rgba(var(--copy-primary))",
          "copy-secondary":"rgba(var(--copy-secondary))",
          cta:"rgba(var(--cta))",
          "cta-active":"rgba(var(--cta-active))",
          "cta-text":"rgba(var(--cta-text))",
          highlight:"rgba(var(--highlight))",
          "highlight-aux":"rgba(var(--highlight-aux))",
          navbar:"rgba(var(--navbar))",
        }
      },
    },
    plugins: [],
  }
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
          "highlight-low":"rgba(var(--highlight-low))",
          "highlight-high":"rgba(var(--highlight-high))",
          "highlight-aux-low":"rgba(var(--highlight-aux-low))",
          "highlight-aux-high":"rgba(var(--highlight-aux-high))",
        },
        keyframes: {
          gradient: {
          "0%":{backgroundPosition:"0% 50%"},
          "100%":{backgroundPosition:"100% 50%"},
          }
        },
        animation: {
          gradient: 'gradient 6s linear infinite',
        },
      },
    },
    plugins: [],
  }
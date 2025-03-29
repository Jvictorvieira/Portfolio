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
          background:"rba(var(--background))",
          border:"rba(var(--border))",
          card:"rba(var(--card))",
          "copy-primary":"rba(var(--copy-primary))",
          "copy-secondary":"rba(var(--copy-secondary))",
          cta:"rba(var(--cta))",
          "cta-active":"rba(var(--cta-active))",
          "cta-text":"rba(var(--cta-text))",
          grape:"rba(var(--grape))",
        }
      },
    },
    plugins: [],
  }
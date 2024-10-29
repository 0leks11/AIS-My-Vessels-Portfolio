module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': '#f0f0f0',
        'text-color': '#333',
        'button': '#2ecc71',
        'header-footer-bg': '#000',
        'header-footer-text': '#fff',
        'header-h2': '#999',
        'background-color-button': '#27ae60'
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('./img/photo1.jpeg')",
      },
      boxShadow: {
        custom: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.5s forwards',
      },
    },
  },
  plugins: [],
}
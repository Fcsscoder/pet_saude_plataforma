// tailwind.config.js
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // <- aponta todos os arquivos React
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        danger: '#e3342f',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
    },
  },
};

const path = require('path');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['"CustomFont"', 'sans-serif'], // Define the custom font
        test:["Test", "sans-serif"]
      },
    },
  },
  plugins: [],
};

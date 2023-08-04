/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px);',
        circularDark: 'repeating-radial-gradient(rgba(255,255,255,0.4) 2px,#1b1b1b 8px,#1b1b1b 100px);',
    },
  },
    screens:{
      '2xl':{max:'1535px'},
      xl:{max:'1279px'},
      lg:{max:'1023px'},
      md:{max:'767px'},
      sm:{max:'639px'},
      xs:{max:'479px'},
    },
    plugins: [],
  },
};


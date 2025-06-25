/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // ajusta a tu estructura
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      // aquí tus colores, fuentes, etc.
      colors: {
        brand: {
          carrot: "#c15b2e",
          lime: "#9bc153",
          forest: "#2d553e",
          parchment: "#d8dccc",
          olive: "#7b9856",
          noir: "#040404",
          cocoa: "#7e6a54",
          earth: "#554222",
          mist: "#93a39e",
          teal: "#194440",
        },
      },
    },
  },

  /* -------------  P L U G I N S  ------------- */
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        /* contenedor */
        ".scrollbar-hide": {
          "-ms-overflow-style": "none" /* IE y Edge Legacy  */,
          "scrollbar-width": "none" /* Firefox          */,
        },
        /* barra WebKit (horizontal y vertical) */
        ".scrollbar-hide::-webkit-scrollbar": {
          width: "0px",
          height: "0px",
        },
      });
    }),
  ],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // ajusta a tu estructura
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // aquí tus colores, fuentes, etc.
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

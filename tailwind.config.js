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
    require("tailwindcss/plugin")(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* Chrome / Safari / Edge */
          "&::-webkit-scrollbar": { display: "none" },
          /* Firefox */
          "scrollbar-width": "none",
          /* IE y fallback */
          "-ms-overflow-style": "none",
        },
      });
    }),
  ],
};

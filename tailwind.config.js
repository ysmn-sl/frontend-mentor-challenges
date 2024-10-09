/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        LightSlateBlue: "hsl(252, 100%, 67%)",
        LightRoyalBlue: "hsl(241, 81%, 54%)",
        VioletBlue: "hsla(256, 72%, 46%, 1)",
        PersianBlue: "hsla(241, 72%, 46%, 0)",
      },
    },
  },
  plugins: [],
};

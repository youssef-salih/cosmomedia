/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "new-black": "#0B0B0F",
        myorange: "#EF4824",
      },
      backgroundImage: {
        texture: "./assets/Texture.svg",
      },
      fontFamily: {
        ephis: ["ephis", "sans-serif"],
        teko: ["Teko"],
      },
    },
  },
  plugins: [],
};

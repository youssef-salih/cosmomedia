/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "new-black": "#0B0B0F",
        "myred": "#EF4824",
      },
      backgroundImage: {
        texture: "./assets/Texture.svg",
      },
      fontFamily: {
        wagonBold: ["wagonBold"],
        wagonExtraLight: ["wagonExtraLight"],
        wagonExtraLightItalic: ["wagonExtraLightItalic"],
        teko: ["teko"],
      },
    },
  },
  plugins: [],
};

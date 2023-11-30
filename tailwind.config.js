/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "new-black": "#181818",
        myorange: "#EF4824",
        kaki: "#CF4325",
      },
      backgroundImage: {
        texture: "./assets/Texture.svg",
        "linear-pattern":
          "linear-gradient(to bottom,rgb(239 72 36 / 70%),rgb(239 72 36 / 70%) 47%,transparent,transparent 47%,transparent,transparent 55%,rgb(239 72 36 / 70%) 50%,rgb(239 72 36 / 70%));",
      },
      fontFamily: {
        ephis: ["ephis", "sans-serif"],
        teko: ["Teko"],
        stick: ["Stick No Bills", "sans-serif"],
        montserat: ["Montserrat Alternates"],
      },
    },
  },
  plugins: [],
};

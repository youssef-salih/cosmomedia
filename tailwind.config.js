/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "new-black": "#181818",
        primary: "#00ECBE",
        secondary: "#00B7C3",
        myorange: "#EF4824",
        kaki: "#CF4325",
      },
      backgroundImage: {
        texture: "url('/background.svg')",
        "main-gradient": "linear-gradient(to left, #00ECBE, #00B7C3)",
        "linear-pattern":
          "linear-gradient(to bottom, rgb(0 236 190 / 70%), rgb(0 236 190 / 70%) 47%, transparent, transparent 47%, transparent, transparent 55%, rgb(0 236 190 / 70%) 50%, rgb(0 236 190 / 70%))",
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

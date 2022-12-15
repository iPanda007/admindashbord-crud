/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#010101",
        secondary: "##EEE6E2",
        Whitepale: "#dedede",
        GrayPale: "#A4A4A4",
        whitePalelg: "#f8f8f8",
        whitePalexl: "#F5F5F5",
        redxs: "#FD6007",
        danger: "#FF2828",
      },
      fontFamily: {
        inter: "Inter",
        quicksand: "Quicksand",
      },
      fontSize: {
        default: "13px",
        title: "17px",
        small: "10px",
      },

    },
  },
  plugins: [],
}

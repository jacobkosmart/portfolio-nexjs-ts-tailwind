module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      kausan: ["Kaushan Script"],
    },
    extend: {
      colors: {
        green: {
          DEFAULT: "#7CB896",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

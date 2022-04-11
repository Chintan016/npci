const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    fontFamily: {
      // custom fonts
      display: ["Montserrat", "sans-serif"],
    },
    extend: {
      //custom colors...
      colors: {
        blue400: "#03408F",
        green400: "#05944F",
        yellow500: "#BC8B2C",
        red400: "#E11900",
        gray400: "#AFAFAF",
        lightWhite: "#ffffff",
        cardText: "#180048",
        heading: "#303030",
        subHeading: "#6C6C6C",
        subBackground: "#757575",
        search: "#f5f5f5",
        searchText: "#A3A3A3",
        mainBackground: "#F8FCFF",
        main: {
          50: "#03408F",
        },
        bgHero: {
          100: "#F19DFF",
        },
      },
      bgGradientDeg: {
        75: "75deg",
      },
    },
  },
  // custom plugins
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-gradient": (angle) => ({
            "background-image": `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          values: Object.assign(theme("bgGradientDeg", {}), {
            10: "10deg",
            15: "15deg",
            20: "20deg",
            25: "25deg",
            30: "30deg",
            45: "45deg",
            60: "60deg",
            90: "90deg",
            120: "120deg",
            135: "135deg",
          }),
        }
      );
    }),
  ],
};

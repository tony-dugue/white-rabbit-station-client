module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      yellow: {
        50: "#fefce8",
        100: "#fef9c3",
        200: "#fef08a",
        300: "#fde047",
        400: "#facc15",
        500: "#eab308",
        600: "#ca8a04",
        700: "#a16207",
        800: "#854d0e",
        900: "#713f12",
        950: "#422006",
      },
    },
    extend: {
      container: {
        padding: "1rem",
        center: true,
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "100%",
        },
      },
    },
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900",
    },
  },
  corePlugins: {
    // preflight: false,
  },
  plugins: [require("tailwindcss-primeui")],
};

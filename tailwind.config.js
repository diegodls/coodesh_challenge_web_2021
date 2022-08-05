module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        pharma: {
          primary: "#f3f3f3",
          secondary: "#FFFFFF",
          txt_primary: "#252A37",
          txt_secondary: "#9C9D9E",
          enabled: "#0283C5",
          disabled: "#c2c2c2",
          hover: "#189de0",
          border_enabled: "#6a7186",
          border_disabled: "#c2c2c2",
          border_focus: "#0283C5",
          error_primary: "#EB5353",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};

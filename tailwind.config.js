module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            colors: {
                pharma: {
                    primary: "#f3f3f3",
                    secondary: "#FFFFFF",
                    txt_primary: "#252A37",
                    txt_secondary: "###78819B",
                    enabled: "##0029FF",
                    disabled: "#ECE6FE",
                    hover: "#FBF7F0",
                    border_enable: "#6a7186",
                    border_disabled: "#ECE6FE",
                    border_focus: "#0029FF",
                    error_primary: '#EB5353'
                },
            },
        },
    },
    plugins: [require("@tailwindcss/forms"), require('tailwind-scrollbar'), ],
};
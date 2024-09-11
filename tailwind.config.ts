import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scrollMargin: {
        'scroll-1300': '90px',
        'scroll-765': '62px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "nav-default": "#808080",
        "nav-hover": "#000000",
        "nav-active": "#991b1b",
        "whatsapp-default": "#25d366",
        "whatsapp-hover": "#1eab5e",
        footerBg: "#212529",
        primaryText: "#991b1b",
        "primaryText-hover": "#700e0e",
        primary: "#991b1b !important",
      },
      boxShadow: {
        "nav-shadow": "0 2px 8px rgba(0, 0, 0, 0.1)",
        'services-card': '0 4px 10px rgba(0, 0, 0, 0.15)'
      },
      maxWidth: {
        "big-screen": "1200px",
        "small-screen": "570px",
      },
      screens: {
        "mq-400": { max: "400px" },
        "mq-765": { max: "765px" },
        "min-mq-766": { min: "766px" },
        "mq-1300": { max: "1300px" },
        "min-mq-1301": { min: "1301px" },
      },
    },
  },
  plugins: [],
};
export default config;

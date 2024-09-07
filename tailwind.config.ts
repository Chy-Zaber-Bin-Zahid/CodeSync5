import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'nav-default': "#808080",
        'nav-hover': "#000000",
        'nav-active': "#0000ff",
        'whatsapp-default': "#25d366",
        'whatsapp-hover': "#1eab5e",
        'footerBg': "#212529",
      },
      boxShadow: {
        'nav-shadow': '0 2px 8px rgba(0, 0, 0, 0.1)',
      },
      maxWidth: {
        'big-screen': '1200px',
        'small-screen': '570px',
      },
      screens: {
        'nav-mq': {'max': '765px'},
      },
    },
  },
  plugins: [],
};
export default config;

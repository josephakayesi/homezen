import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        homeBackground: "url('/home-background.png')",
      },
      colors: {
        primary: "#119ba4",
        secondary: "#000c0d",
        // gray: "#7e7f80",
      },
    },
  },
  plugins: [],
};
export default config;

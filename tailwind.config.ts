import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monaspace: ["var(--font-monaspaceNeonRegular)"],
        bungee: ["var(--font-bungee-hairline)"],
        novamono: ["var(--font-nova-mono)"],
        cozette: ["var(--font-cozette)"],
        barcode: ["var(--font-libre-barcode)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;

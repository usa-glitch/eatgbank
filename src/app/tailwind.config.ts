import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { primary: "#0A1F3F", accent: "#C9A84C" } } },
  plugins: [],
};
export default config;

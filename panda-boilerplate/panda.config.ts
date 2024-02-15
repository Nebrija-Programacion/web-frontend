import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./components/**/*.{js,jsx,ts,tsx}",
    "./islands/**/*.{js,jsx,ts,tsx}",
    "./routes/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: ["./routes/api/**/*.{js,jsx,ts,tsx}"],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",

  // The JSX framework to use
  jsxFramework: "preact",
});

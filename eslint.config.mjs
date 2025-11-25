import prettier from "eslint-config-prettier";

export default [
  // твої правила Next.js / React
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    rules: {},
  },

  // додаємо prettier як останній елемент
  prettier,
];

const js = require("@eslint/js");
const globals = require("globals");
const tseslint = require("typescript-eslint");

module.exports = tseslint.config(
  // Ignore build output and dependencies
  { ignores: ["dist/**", "node_modules/**"] },

  // Base JS recommended rules
  js.configs.recommended,

  // TypeScript recommended (non type-checked for speed and simplicity)
  ...tseslint.configs.recommended,

  // Our project settings
  {
    files: ["**/*.ts"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
      ],
    },
  },

  // Relax rules in test files (specs and test helpers)
  {
    files: ["**/*.spec.ts", "test/**/*.ts"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
    },
  }
);



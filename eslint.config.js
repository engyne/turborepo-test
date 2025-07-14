import { defineConfig } from "eslint/config";
import vue from "eslint-plugin-vue";
import tsConfig from "@typescript-eslint/eslint-plugin";
import vueConfig from "eslint-plugin-vue/lib/configs/vue3-recommended.js";
import tsParser from "@typescript-eslint/parser";
import vueParser from "vue-eslint-parser";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default defineConfig([
  {
    ignores: ["**/dist/**", "**/node_modules/**"],
  },
  // 🔹 Base TypeScript rules (backend, shared types, etc.)
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tsConfig,
    },
    rules: tsConfig.configs.recommended.rules,
  },
  // 🔹 Vue + TypeScript (frontend)
  {
    files: ["apps/frontend/**/*.{vue,ts}"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser, // used for <script> blocks in .vue files
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    plugins: {
      vue,
      "@typescript-eslint": tsConfig,
      prettier: prettierPlugin,
    },
    rules: {
      ...vueConfig.rules,
      ...tsConfig.configs.recommended.rules,
      ...prettierConfig.rules,
    },
  },
]);

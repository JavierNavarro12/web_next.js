import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // Configuración global
    rules: {
      // Permitir variables no usadas en algunos casos específicos
      "@typescript-eslint/no-unused-vars": ["warn", { 
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_"
      }]
    }
  },
  {
    // Excepciones para archivos de test
    files: ["**/*.test.{ts,tsx}", "**/__tests__/**/*.{ts,tsx}"],
    rules: {
      // Permitir @ts-nocheck en archivos de test
      "@typescript-eslint/ban-ts-comment": "off",
      // Permitir variables no usadas en tests (mocks, etc.)
      "@typescript-eslint/no-unused-vars": "off",
      // Permitir any en tests cuando sea necesario
      "@typescript-eslint/no-explicit-any": "warn"
    }
  },
  {
    // Excepciones para archivos de tipos de test
    files: ["src/types/**/*.d.ts"],
    rules: {
      // Permitir any en definiciones de tipos para Jest
      "@typescript-eslint/no-explicit-any": "off"
    }
  },
  {
    // Excepciones para archivos Cypress
    files: ["cypress/**/*.{ts,tsx}"],
    rules: {
      // Permitir variables no usadas en Cypress (e.g., runnable)
      "@typescript-eslint/no-unused-vars": "off"
    }
  }
];

export default eslintConfig;

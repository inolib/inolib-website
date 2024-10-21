import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import importXPlugin from "eslint-plugin-import-x";
import jsdocPlugin from "eslint-plugin-jsdoc";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import perfectionistPlugin from "eslint-plugin-perfectionist";
import reactPlugin from "eslint-plugin-react";
import tailwindcssPlugin from "eslint-plugin-tailwindcss";
import unicornPlugin from "eslint-plugin-unicorn";
import globals from "globals";
import typescriptESLint from "typescript-eslint";

const compat = new FlatCompat();

export default typescriptESLint.config(
  eslint.configs.recommended,
  unicornPlugin.configs["flat/recommended"],
  importXPlugin.flatConfigs.recommended,
  jsdocPlugin.configs["flat/recommended"],
  perfectionistPlugin.configs["recommended-natural"],
  ...tailwindcssPlugin.configs["flat/recommended"],
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      ...typescriptESLint.configs.recommendedTypeChecked,
      importXPlugin.flatConfigs.typescript,
      jsdocPlugin.configs["flat/recommended-typescript"],
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  {
    files: ["**/*.tsx"],
    extends: [
      jsxA11yPlugin.flatConfigs.recommended,
      reactPlugin.configs.flat.recommended,
      reactPlugin.configs.flat["jsx-runtime"],
      ...fixupConfigRules(
        compat.config({
          extends: "plugin:react-hooks/recommended",
        }),
      ),
    ],
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,
        ...globals.nodeBuiltin,
      },
      parserOptions: {
        ecmaVersion: "latest",
      },
      sourceType: "module",
    },
    linterOptions: {
      noInlineConfig: true,
      reportUnusedDisableDirectives: "error",
    },
    rules: {
      // ESLint
      "no-irregular-whitespace": "off",

      // import-x
      "import-x/newline-after-import": "error",

      // perfectionist
      "perfectionist/sort-enums": [
        "error",
        {
          type: "natural",
        },
      ],
      "perfectionist/sort-exports": [
        "error",
        {
          type: "natural",
        },
      ],
      "perfectionist/sort-imports": [
        "error",
        {
          customGroups: {
            value: {
              asset: "#/**",
            },
          },
          groups: [
            ["builtin", "builtin-type"],
            ["external", "external-type"],
            ["internal", "internal-type"],
            "asset",
            ["parent", "parent-type"],
            ["index", "index-type", "sibling", "sibling-type"],
            "side-effect",
            "unknown",
          ],
          type: "natural",
        },
      ],
      "perfectionist/sort-jsx-props": [
        "error",
        {
          groups: ["unknown", "shorthand"],
          type: "natural",
        },
      ],
      "perfectionist/sort-named-exports": [
        "error",
        {
          groupKind: "values-first",
          type: "natural",
        },
      ],
      "perfectionist/sort-named-imports": [
        "error",
        {
          groupKind: "values-first",
          type: "natural",
        },
      ],
      "perfectionist/sort-object-types": "off",
      "perfectionist/sort-objects": "off",
      "perfectionist/sort-switch-case": [
        "error",
        {
          type: "natural",
        },
      ],
      "perfectionist/sort-union-types": [
        "error",
        {
          groups: ["object", "function", "operator", "named", "literal", "keyword", "nullish", "unknown"],
          type: "natural",
        },
      ],

      // react
      "react/prop-types": "off",

      // tailwindcss
      "tailwindcss/classnames-order": "off",
      "tailwindcss/no-custom-classname": [
        "error",
        {
          callees: ["cn", "tv"],
          cssFiles: [],
        },
      ],

      // unicorn
      "unicorn/custom-error-definition": "error",
      "unicorn/filename-case": "off",
      "unicorn/no-null": "off",
      "unicorn/prefer-top-level-await": "off",
      "unicorn/prevent-abbreviations": "off",
    },
    settings: {
      "import-x/resolver": {
        typescript: true,
      },
      react: {
        version: "detect",
      },
    },
  },
  prettierConfig,
);

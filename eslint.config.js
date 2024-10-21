import config from "@inolib/config-eslint";

/** @type {import("eslint").Linter.Config} */
export default [
  {
    ignores: ["**/vendor/", "packages/"],
  },
  ...config,
];

/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard-scss"],
  rules: {
    "scss/at-rule-no-unknown": true,
    "no-descending-specificity": true,
    "declaration-block-no-duplicate-properties": true,
  },
};
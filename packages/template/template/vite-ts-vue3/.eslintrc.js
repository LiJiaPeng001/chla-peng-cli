module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:vue/essential", "prettier", "./.eslintrc-auto-import.json"],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "vue/no-multiple-template-root": "off",
    "vue/multi-word-component-names": "off", // 去除组件只能多单词组成
    "no-unused-vars": ["error"],
  },
}

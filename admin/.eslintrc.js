module.exports = {
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: ["plugin:vue/recommended"],
  plugins: ["vue"],
  rules: {
    "vue/no-deprecated-slot-attribute": "off",
    "vue/multi-word-component-names": "off",
  },
};

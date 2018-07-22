module.exports = {
  extends: ["react-app", "plugin:prettier/recommended"],
  rules: {
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": ["warn", { aspects: ["invalidHref"] }]
  }
};

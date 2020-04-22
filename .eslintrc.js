module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es6": true,
  },
  "extends": [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/vue",
    "plugin:vue/vue3-recommended",
  ],
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "warnOnUnsupportedTypeScriptVersion": false,
    "project": './tsconfig.json',
    "tsconfigRootDir": __dirname
  },
  "plugins": [
    "prettier",
    "@typescript-eslint"
  ],
  "rules": {
    "@typescript-eslint/explicit-function-return-type": 0,
  },
}

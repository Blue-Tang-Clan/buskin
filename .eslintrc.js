module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'import/extensions': ['error', 'always', { ignorePackages: true }],
    'jsx-quotes': ['error', 'prefer-single'],
    'no-console': 'off',
  },
};

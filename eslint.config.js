const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommended: true,
});

module.exports = [
  ...compat.extends('next/core-web-vitals'),
];

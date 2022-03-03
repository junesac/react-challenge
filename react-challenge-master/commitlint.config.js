module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-empty': [0],
    'subject-case': [2, 'always', 'sentence-case'],
  },
};

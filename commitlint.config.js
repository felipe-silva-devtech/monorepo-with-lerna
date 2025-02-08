module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-empty": [2, "never"],
    "type-enum": [2, "always", ["feat", "fix", "docs", "refactor", "test", "chore", "BREAKING CHANGE"]],
    "scope-case": [2, "always", "start-case"],
    "subject-empty": [2, "never"],
  },
};

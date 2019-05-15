module.exports = {
	extends: ['@commitlint/config-conventional'],
rules: {
        'type-enum': [0, 'always', [
            "feat", "fix", "docs", "style", "refactor", "perf", "test", "build", "ci", "chore", "revert"
        ]],
        'subject-full-stop': [0, 'never'],
        'subject-case': [0, 'never']

    }
}

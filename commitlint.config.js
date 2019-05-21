module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-empty': [2, 'never'],
        'type-enum': [2, 'always', [
            "feat", "fix", "docs", "style", "refactor", "perf", "test", "build", "ci", "chore", "revert"
        ]],
        'subject-full-stop': [0, 'never'],
        'subject-case': [0, 'never'],

	}
}

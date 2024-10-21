const commitlintConfig = {
	defaultIgnores: true,
	extends: [],
	ignores: [],
	rules: {
		"scope-empty": [2, "always"],
		"subject-empty": [2, "never"],
		"type-case": [2, "always", "lower-case"],
		"type-empty": [2, "never"],
		"type-enum": [2, "always", ["feat", "fix", "chore"]],
	},
};

export default commitlintConfig;

const RULES = {
	OFF: "off",
	WARN: "warn",
	ERROR: "error",
}
module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
	],
	overrides: [],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint"],
	rules: {
		indent: ["error", "tab"],
		quotes: ["error", "double"],
		semi: ["error", "never"],
		"react/react-in-jsx-scope": RULES.OFF,
		"max-len": [RULES.ERROR, { code: 100 }, { tabWidth: 1 }],
		"no-empty": RULES.WARN,
	},
}

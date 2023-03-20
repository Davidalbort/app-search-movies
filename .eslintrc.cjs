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
		quotes: ["error", "double"],
		semi: ["error", "never"],
		"react/react-in-jsx-scope": RULES.OFF,
		"no-empty": RULES.WARN,
	},
}

import typescriptEslint from "@typescript-eslint/eslint-plugin";
import react from "eslint-plugin-react";
import tsParser from "@typescript-eslint/parser";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
	baseDirectory: process.cwd(),
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	...compat.extends(
		"next/core-web-vitals",
		"plugin:storybook/recommended",
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended"
	),
	{
		plugins: {
			"@typescript-eslint": typescriptEslint,
			react,
		},

		languageOptions: {
			parser: tsParser,
		},

		rules: {
			"react/display-name": "off",
			"react/react-in-jsx-scope": "off",
		},
	},
];

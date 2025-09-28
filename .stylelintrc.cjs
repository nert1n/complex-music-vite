/**
 * Stylelint configuration for SCSS with Tailwind CSS support.
 */
module.exports = {
	extends: ["stylelint-config-standard-scss"],
	rules: {
		// Disable core rule in favor of SCSS-specific version below
		"at-rule-no-unknown": null,

		// Allow TailwindCSS at-rules within SCSS
		"scss/at-rule-no-unknown": [
			true,
			{
				ignoreAtRules: [
					"tailwind",
					"apply",
					"layer",
					"variants",
					"responsive",
					"screen",
				],
			},
		],

		// Optional: you may tune additional rules as needed
	},
};

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			animation: {
				"reverse-spin": "reverse-spin 1s linear infinite",
			},
			keyframes: {
				"reverse-spin": {
					from: {
						transform: "rotate(360deg)",
					},
				},
			},
			fontFamily: {
				sans: [...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}

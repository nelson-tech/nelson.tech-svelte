import adapter from "@sveltejs/adapter-node"
import preprocess from "svelte-preprocess"
import path from "path"
import { defineConfig, searchForWorkspaceRoot } from "vite"
import watchAndRun from "@kitql/vite-plugin-watch-and-run"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({ postcss: true }),

	kit: {
		adapter: adapter({ out: "dist" }),
		vite: {
			resolve: {
				alias: {
					// these are the aliases and paths to them
					$components: path.resolve("./src/components"),
					stores: path.resolve("./src/stores"),
					"@utils": path.resolve("./src/lib/utils"),
					$wp: path.resolve("packages/wp"),
					$i18n: path.resolve("packages/i18n"),
				},
			},
			optimizeDeps: {
				exclude: ["@urql/svelte"],
			},
			server: {
				fs: {
					allow: [searchForWorkspaceRoot(process.cwd()), "packages/"],
				},
			},
			plugins: [
				watchAndRun([
					{
						watch: "**/*.(gql|graphql)",
						run: "npm run gen",
					},
				]),
			],
		},
	},
}

export default config

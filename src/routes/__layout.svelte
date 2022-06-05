<script lang="ts" context="module">
	import "../app.css"
	import "$i18n/config"
	import { waitLocale } from "svelte-i18n"
	import apiInit from "$wp/lib/init"

	export async function preload() {
		// awaits for the loading of the 'en-US' and 'en' dictionaries
		return waitLocale()
	}

	apiInit()
</script>

<script lang="ts">
</script>

<div class="p-8 max-w-6xl mx-auto">
	<slot />
</div>

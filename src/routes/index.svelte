<script context="module" lang="ts">
	import {
		KQL_AddToCart,
		KQL_GetCart,
		KQL_GetHome,
		KQL_GetProductsWithCategories,
	} from "$lib/api/graphql/stores"
	import serverQuery from "$wp/serverQuery"
	import { t, locale } from "svelte-i18n"

	const homeQuery = {
		store: KQL_GetHome,
		variables: { locale: locale, name: "home" },
	}
	const getCart = {
		store: KQL_GetCart,
	}
	const products = { store: KQL_GetProductsWithCategories, variables: {} }
	export const load = serverQuery([getCart])
</script>

<script lang="ts">
	const addToCart = async () => {
		// patch with optimistic data
		const optimisticData = $KQL_GetCart.data
		optimisticData?.cart?.subtotal && (optimisticData.cart.subtotal = "Refreshing")
		optimisticData && KQL_GetCart.patch(optimisticData, {}, "store-only")

		const { data } = await KQL_AddToCart.mutate({ variables: { input: { productId: 31 } } })
		data && KQL_GetCart.patch({ cart: data.addToCart?.cart }, {}, "cache-and-store")
	}
</script>

<svelte:head>
	<title>nelson.tech</title>
</svelte:head>

<h1 class="text-4xl text-center my-8">nelson.tech</h1>
{addToCart()}
{JSON.stringify($KQL_GetCart, null, 2)}

<div>
	{$t("sign_in")}
</div>
<div class="py-4 grid gap-4 grid-cols-1 md:grid-cols-2" />

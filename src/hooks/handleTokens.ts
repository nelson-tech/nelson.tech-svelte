import type { RequestEvent } from "@sveltejs/kit/types/internal"
import Cookies from "js-cookie"

export async function handleTokens({ event, resolve }: { event: RequestEvent; resolve: any }) {
	const cookies = Cookies.get()

	console.log("COOKIES", cookies)

	const response = await resolve(event)

	return response
}

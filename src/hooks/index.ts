import type { RequestEvent } from "@sveltejs/kit/types/internal"
import { sequence } from "@sveltejs/kit/hooks"
import { handleTokens } from "./handleTokens"

export const handle = sequence(handleTokens)

export function getSession(event: RequestEvent) {
	// Give all locals to the session
	return event.locals
}

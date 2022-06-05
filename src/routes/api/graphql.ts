import type { RequestHandler } from "@sveltejs/kit"

import proxy from "$wp/lib/proxy"

export const post: RequestHandler = async (event) => await proxy(event)

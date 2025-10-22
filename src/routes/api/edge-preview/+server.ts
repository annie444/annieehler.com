import type { RequestHandler } from './$types';
import { createEdgePreviewPayload, type CloudflareBindings } from '$lib/server/cloudflare';

export const GET: RequestHandler = async ({ platform }) => {
	const env = (platform?.env ?? {}) as CloudflareBindings;
	const payload = createEdgePreviewPayload(env);

	return new Response(
		JSON.stringify({
			generatedAt: new Date().toISOString(),
			note: 'Swap this response for real preview data once Cloudflare bindings are provisioned.',
			bindings: payload
		}),
		{
			headers: {
				'content-type': 'application/json',
				'cache-control': 'no-store'
			}
		}
	);
};

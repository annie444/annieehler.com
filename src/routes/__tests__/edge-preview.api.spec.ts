import { describe, expect, it } from 'vitest';
import { GET } from '../api/edge-preview/+server';

const createEvent = (env: Record<string, unknown>) =>
	({
		platform: { env }
	}) as unknown as Parameters<typeof GET>[0];

describe('GET /api/edge-preview', () => {
	it('returns placeholder bindings for Cloudflare preview data', async () => {
		const response = await GET(createEvent({}));
		expect(response.status).toBe(200);

		const body = await response.json();
		expect(body.note).toMatch(/Swap this response/);
		expect(body.bindings.analytics.enabled).toBe(false);
	});

	it('flags analytics when KV binding exists', async () => {
		const response = await GET(createEvent({ KV_SITE_CACHE: {} }));
		const body = await response.json();
		expect(body.bindings.analytics.enabled).toBe(true);
	});
});

import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('/+page.svelte', () => {
	it('renders the hero headline and CTA links', async () => {
		render(Page);

		const heading = page.getByRole('heading', {
			level: 1,
			name: /Designing resilient systems/i
		});
		await expect.element(heading).toBeInTheDocument();

		const primaryCta = page.getByRole('link', { name: /Download CV/i });
		await expect.element(primaryCta).toBeInTheDocument();
	});
});

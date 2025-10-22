import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import CvPage from '../cv/+page.svelte';

describe('/cv', () => {
	it('outlines positioning statement and focus areas', async () => {
		render(CvPage);

		const heading = page.getByRole('heading', {
			level: 2,
			name: /Craft a narrative/i
		});
		await expect.element(heading).toBeInTheDocument();

		const focusList = page.getByText(/Current focus/i);
		await expect.element(focusList).toBeInTheDocument();
	});
});

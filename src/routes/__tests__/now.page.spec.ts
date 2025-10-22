import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import NowPage from '../now/+page.svelte';

describe('/now', () => {
	it('highlights current period and experiments', async () => {
		render(NowPage);

		const heading = page.getByRole('heading', {
			level: 2,
			name: /A living changelog/i
		});
		await expect.element(heading).toBeInTheDocument();

		const experiment = page.getByText(/Workers AI playground/i);
		await expect.element(experiment).toBeInTheDocument();
	});
});

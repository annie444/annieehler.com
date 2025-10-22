import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import BlogPage from '../blog/+page.svelte';

describe('/blog', () => {
	it('renders blog cards with links to detail pages', async () => {
		render(BlogPage);

		const articleLink = page.getByRole('link', {
			name: /Edge-first SvelteKit Architectures/i
		});
		await expect.element(articleLink).toBeInTheDocument();
	});
});

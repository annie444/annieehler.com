import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import BlogPostPage from '../blog/[slug]/+page.svelte';
import { findPostBySlug } from '$lib/content/data';

describe('/blog/[slug]', () => {
	it('renders markdown placeholder content for a given slug', async () => {
		const post = findPostBySlug('edge-first-sveltekit');
		expect(post).toBeDefined();

		render(BlogPostPage, { props: { data: { post: post! } } });

		const heading = page.getByRole('heading', {
			level: 1,
			name: /Edge-first SvelteKit Architectures/i
		});
		await expect.element(heading).toBeInTheDocument();
	});
});

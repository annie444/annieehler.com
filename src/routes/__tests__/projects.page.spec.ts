import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import ProjectsPage from '../projects/+page.svelte';

describe('/projects', () => {
	it('lists project cards with technology badges', async () => {
		render(ProjectsPage);

		const heading = page.getByRole('heading', {
			level: 2,
			name: /Show your craft/i
		});
		await expect.element(heading).toBeInTheDocument();

		const techBadge = page.getByText('SvelteKit');
		await expect.element(techBadge).toBeInTheDocument();
	});
});

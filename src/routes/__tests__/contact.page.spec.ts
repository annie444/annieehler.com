import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import ContactPage from '../contact/+page.svelte';

describe('/contact', () => {
	it('shows contact channels with call to action', async () => {
		render(ContactPage);

		const contactHeading = page.getByRole('heading', {
			level: 2,
			name: /Invite conversations/i
		});
		await expect.element(contactHeading).toBeInTheDocument();

		const openLink = page.getByRole('link', { name: /^Open$/i });
		await expect.element(openLink).toBeInTheDocument();
	});
});

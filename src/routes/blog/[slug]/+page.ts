import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { findPostBySlug } from '$lib/content/data';

export const load: PageLoad = ({ params }) => {
	const post = findPostBySlug(params.slug);

	if (!post) {
		throw error(404, {
			message: `Blog post not found: ${params.slug}`
		});
	}

	return {
		post
	};
};

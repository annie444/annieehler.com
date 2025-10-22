<script lang="ts">
	import type { BlogPost } from '$lib/content';

	const { posts = [] } = $props<{ posts: BlogPost[] }>();
</script>

<section class="mx-auto mt-16 flex max-w-5xl flex-col gap-6 px-6">
	{#each posts as post (post.slug)}
		<article
			class="rounded-3xl border border-white/10 bg-slate-900/60 p-8 transition hover:border-amber-300/60"
		>
			<p class="text-xs tracking-[0.3em] text-amber-300/70 uppercase">
				{post.publishedAt} · {post.readingTime}
			</p>
			<h3 class="mt-3 text-2xl font-semibold text-white">
				<a class="hover:text-amber-200" href={`/blog/${post.slug}`}>{post.title}</a>
			</h3>
			<p class="mt-2 text-sm text-slate-300">{post.subtitle}</p>
			<p class="mt-4 text-sm text-slate-400">{post.summary}</p>
			<ul class="mt-4 flex flex-wrap gap-2 text-xs tracking-[0.15em] text-slate-400 uppercase">
				{#each post.tags as tag (tag)}
					<li class="rounded-full border border-white/10 px-3 py-1">{tag}</li>
				{/each}
			</ul>
		</article>
	{/each}
</section>

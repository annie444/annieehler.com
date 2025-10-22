<script lang="ts">
	import { siteMeta, type BlogPost } from '$lib/content';

	const { data } = $props<{ data: { post: BlogPost } }>();
	const post = data.post;
	const canonical = `https://annieehler.com/blog/${post.slug}`;
</script>

<svelte:head>
	<title>{post.title} · {siteMeta.name}</title>
	<meta name="description" content={post.summary} />
	<meta property="og:title" content={post.title} />
	<meta property="og:description" content={post.summary} />
	<meta property="og:type" content="article" />
	<meta property="article:published_time" content={post.publishedAt} />
	<link rel="canonical" href={canonical} />
</svelte:head>

<article class="mx-auto max-w-3xl px-6 py-20 text-slate-200">
	<p class="text-xs tracking-[0.3em] text-amber-300/70 uppercase">
		{post.publishedAt} · {post.readingTime}
	</p>
	<h1 class="mt-4 text-4xl font-semibold text-white">{post.title}</h1>
	<p class="mt-3 text-lg text-slate-300">{post.subtitle}</p>
	<ul class="mt-4 flex flex-wrap gap-3 text-xs tracking-[0.15em] text-slate-400 uppercase">
		{#each post.tags as tag (tag)}
			<li class="rounded-full border border-white/10 px-3 py-1">{tag}</li>
		{/each}
	</ul>
	<div class="prose prose-invert mt-10 max-w-none text-base leading-relaxed text-slate-200">
		{@html post.content}
	</div>
	<section
		class="mt-16 rounded-3xl border border-dashed border-amber-300/60 bg-slate-900/40 p-6 text-sm text-slate-300"
	>
		<p>
			TODO: Embed call-to-action for newsletter, Cloudflare Worker repo, or workshop sign-up.
			Reference Wrangler branch previews once configured.
		</p>
	</section>
	<p class="mt-16 text-xs text-slate-500">
		Draft mode placeholder — instrument DRAFT/SHIPPING state via KV_SITE_CACHE and display a preview
		banner when <code>post.status === 'draft'</code>.
	</p>
</article>

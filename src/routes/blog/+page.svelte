<script lang="ts">
	import BlogList from '$lib/components/blog/BlogList.svelte';
	import SectionHeading from '$lib/components/sections/SectionHeading.svelte';
	import { blogPosts, siteMeta } from '$lib/content';
</script>

<svelte:head>
	<title>{siteMeta.name} · Blog</title>
	<meta
		name="description"
		content="Placeholder blog index powered by MDsveX or data pipelines. Replace once your writing workflow is ready."
	/>
</svelte:head>

<section class="mx-auto max-w-6xl px-6 py-20">
	<SectionHeading
		eyebrow="Writing"
		title="Document the experiments and share the learnings"
		subtitle="Swap these posts for MDsveX content or a CMS feed. Consider adding filters, RSS, and Cloudflare caching."
	/>
	<BlogList posts={blogPosts} />
	<section
		class="mx-auto mt-20 max-w-4xl rounded-3xl border border-dashed border-amber-300/60 bg-slate-900/40 p-8 text-sm text-slate-300"
	>
		<h3 class="text-lg font-semibold text-white">Editor note</h3>
		<p>
			Outline how you publish essays, lab notes, or transcripts. Mention the tooling (MDsveX, Notion
			sync, Workers KV) you plan to wire up. Link to your content guidelines or writing schedule.
		</p>
	</section>
</section>

<script lang="ts">
	import NowBoard from '$lib/components/now/NowBoard.svelte';
	import SectionHeading from '$lib/components/sections/SectionHeading.svelte';
	import { nowUpdate, siteMeta } from '$lib/content';
</script>

<svelte:head>
	<title>{siteMeta.name} · Now</title>
	<meta
		name="description"
		content="Share what you are focused on this season. Update quarterly with experiments, learning, and community work."
	/>
</svelte:head>

<section class="mx-auto max-w-6xl px-6 py-20">
	<SectionHeading
		eyebrow="Now"
		title="A living changelog for your practice"
		subtitle="Swap in real updates, logs, and public roadmaps. Highlight how Cloudflare Workers power current experiments."
	/>
	<NowBoard update={nowUpdate} />
	<section
		class="mx-auto mt-20 max-w-4xl rounded-3xl border border-dashed border-amber-300/60 bg-slate-900/40 p-8 text-sm text-slate-300"
	>
		<h3 class="text-lg font-semibold text-white">Changelog and roadmap</h3>
		<p>
			TODO: Connect this page to a KV cache or GitHub issue label so updates can be edited without
			redeploying. Surface latest Cloudflare Worker build IDs and their release notes here.
		</p>
	</section>
</section>

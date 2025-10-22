<script lang="ts">
	import ProjectList from '$lib/components/projects/ProjectList.svelte';
	import SectionHeading from '$lib/components/sections/SectionHeading.svelte';
	import { projects, siteMeta } from '$lib/content';
</script>

<svelte:head>
	<title>{siteMeta.name} · Projects</title>
	<meta
		name="description"
		content="Template for project case studies. Replace cards with rich MDsveX posts or CMS-driven content."
	/>
</svelte:head>

<section class="mx-auto max-w-6xl px-6 py-20">
	<SectionHeading
		eyebrow="Projects"
		title="Show your craft, outcomes, and learning loops"
		subtitle="Organise active, in-flight, and archived work. Each card links to future deep dives or live demos."
	/>
	<ProjectList {projects} />
	<section
		class="mx-auto mt-20 max-w-4xl space-y-4 rounded-3xl border border-dashed border-amber-300/60 bg-slate-900/40 p-8 text-sm text-slate-300"
	>
		<h3 class="text-lg font-semibold text-white">Coming soon: detailed case studies</h3>
		<p>
			Replace this placeholder with MDsveX routes under <code>/projects/[slug]</code>. Outline the
			structure you plan to use — context, constraints, approach, outcomes, and follow-up
			experiments.
		</p>
		<p class="text-xs text-slate-400">
			TODO: Once Cloudflare asset storage (R2) is connected, embed diagrams, metrics, or dashboards.
		</p>
	</section>
</section>

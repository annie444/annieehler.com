<script lang="ts">
	import ExperienceTimeline from '$lib/components/cv/ExperienceTimeline.svelte';
	import SkillTags from '$lib/components/cv/SkillTags.svelte';
	import SectionHeading from '$lib/components/sections/SectionHeading.svelte';
	import { cvHighlights, education, experience, skills, siteMeta } from '$lib/content';
</script>

<svelte:head>
	<title>{siteMeta.name} · Curriculum Vitae</title>
	<meta
		name="description"
		content="Blueprint for a living CV — replace placeholders with real achievements, publications, and collaborations."
	/>
</svelte:head>

<section class="mx-auto max-w-5xl px-6 py-20">
	<SectionHeading
		eyebrow="Curriculum vitae"
		title="Craft a narrative that evolves with your practice"
		subtitle="Use this scaffold to organise experience, education, recognitions, and the work you are seeking next."
	/>
	<div
		class="mt-12 grid gap-6 rounded-3xl border border-white/10 bg-slate-900/60 p-10 text-sm text-slate-300 md:grid-cols-[1.2fr_1fr]"
	>
		<div class="space-y-4">
			<h3 class="text-xl font-semibold text-white">Positioning statement</h3>
			<p>{cvHighlights.statement}</p>
			<p class="text-xs text-slate-400">
				TODO: Embed a link to your JSON resume export or print-friendly PDF generated via a
				SvelteKit endpoint.
			</p>
		</div>
		<div class="space-y-4">
			<h3 class="text-sm font-semibold tracking-[0.3em] text-amber-300/70 uppercase">
				Current focus
			</h3>
			<ul class="space-y-2 text-slate-200">
				{#each cvHighlights.focusAreas as focusArea}
					<li>• {focusArea}</li>
				{/each}
			</ul>
			<h3 class="text-sm font-semibold tracking-[0.3em] text-amber-300/70 uppercase">
				Available for
			</h3>
			<ul class="space-y-2 text-slate-200">
				{#each cvHighlights.availableFor as item}
					<li>• {item}</li>
				{/each}
			</ul>
			<p class="text-xs text-slate-400">Research thread: {cvHighlights.currentResearch}</p>
		</div>
	</div>

	<ExperienceTimeline experiences={experience} {education} />

	<section class="mt-16 grid gap-6 md:grid-cols-2">
		<SkillTags title="Languages" items={skills.languages} />
		<SkillTags title="Frameworks" items={skills.frameworks} />
		<SkillTags title="Focus areas" items={skills.focusAreas} />
		<SkillTags title="Tooling" items={skills.tooling} />
	</section>

	<section
		class="mt-16 rounded-3xl border border-dashed border-amber-300/60 bg-slate-900/40 p-8 text-sm text-slate-300"
	>
		<h3 class="text-lg font-semibold text-white">Placeholder: recognitions & press</h3>
		<p class="mt-3">
			Drop speaking engagements, publications, awards, or community highlights here. Consider
			referencing Cloudflare blog features, Workers community spotlights, or open-source mentions.
		</p>
		<p class="mt-4 text-xs text-slate-400">
			TODO: Build a `load` function that fetches this section from KV or D1 once the data pipeline
			is ready.
		</p>
	</section>
</section>

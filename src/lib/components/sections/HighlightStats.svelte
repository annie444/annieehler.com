<script lang="ts">
	import type { HighlightStat } from '$lib/content';

	const { stats = [] } = $props<{ stats: HighlightStat[] }>();
</script>

<section class="mx-auto -mt-12 max-w-5xl px-6">
	<div class="grid gap-4 rounded-3xl border border-white/10 bg-slate-900/80 p-8 md:grid-cols-3">
		{#each stats as stat (stat.label)}
			<div class="rounded-2xl border border-white/10 bg-slate-950/70 p-6 text-center shadow-inner">
				<p class="text-sm tracking-[0.3em] text-amber-300/80 uppercase">{stat.label}</p>
				<p class="mt-3 text-3xl font-semibold text-white">{stat.value}</p>
				<p class="mt-2 text-sm text-slate-300">{stat.description}</p>
			</div>
		{/each}
	</div>
</section>

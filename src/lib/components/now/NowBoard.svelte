<script lang="ts">
	import type { NowUpdate } from '$lib/content';

	const { update } = $props<{ update: NowUpdate }>();
</script>

<section class="mx-auto mt-16 grid max-w-5xl gap-8 px-6 md:grid-cols-[1.4fr_1fr]">
	<article class="rounded-3xl border border-white/10 bg-slate-900/60 p-8">
		<h3 class="text-xs tracking-[0.3em] text-amber-300/70 uppercase">{update.period}</h3>
		<p class="mt-4 text-lg text-slate-200">{update.summary}</p>
		<div class="mt-8 space-y-4 text-sm text-slate-300">
			<h4 class="text-sm font-semibold tracking-[0.3em] text-amber-300/70 uppercase">
				Experiments
			</h4>
			<ul class="space-y-2">
				{#each update.experiments as experiment (experiment)}
					<li>{experiment}</li>
				{/each}
			</ul>
			<h4 class="text-sm font-semibold tracking-[0.3em] text-amber-300/70 uppercase">Learning</h4>
			<ul class="space-y-2">
				{#each update.learning as item (item)}
					<li>{item}</li>
				{/each}
			</ul>
		</div>
	</article>
	<aside class="space-y-4">
		<div class="rounded-3xl border border-white/10 bg-slate-900/60 p-6 text-sm text-slate-300">
			<h4 class="text-xs tracking-[0.3em] text-amber-300/70 uppercase">Focus</h4>
			<dl class="mt-4 space-y-3">
				<div>
					<dt class="text-xs font-semibold tracking-[0.3em] text-slate-400 uppercase">Shipping</dt>
					<dd class="text-slate-200">{update.focus.shipping}</dd>
				</div>
				<div>
					<dt class="text-xs font-semibold tracking-[0.3em] text-slate-400 uppercase">Community</dt>
					<dd class="text-slate-200">{update.focus.community}</dd>
				</div>
				<div>
					<dt class="text-xs font-semibold tracking-[0.3em] text-slate-400 uppercase">Personal</dt>
					<dd class="text-slate-200">{update.focus.personal}</dd>
				</div>
			</dl>
		</div>
		<div
			class="rounded-3xl border border-dashed border-amber-300/60 bg-slate-900/40 p-6 text-xs text-slate-400"
		>
			<p>
				TODO: Embed real metrics from Cloudflare Analytics or Worker logs. Reference your Wrangler
				deployments and provide quick links once CI/CD lands.
			</p>
		</div>
	</aside>
</section>

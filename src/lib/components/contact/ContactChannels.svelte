<script lang="ts">
	import type { ContactChannel } from '$lib/content';

	const { channels = [] } = $props<{ channels: ContactChannel[] }>();
</script>

<section class="mx-auto mt-16 grid max-w-4xl gap-6 px-6 md:grid-cols-3">
	{#each channels as channel (channel.label)}
		<article
			class={`rounded-3xl border border-white/10 bg-slate-900/60 p-6 text-sm text-slate-200 ${channel.type === 'realtime' ? 'md:col-span-2' : ''}`}
		>
			<p class="text-xs tracking-[0.3em] text-amber-300/70 uppercase">{channel.type}</p>
			<h3 class="mt-2 text-lg font-semibold text-white">{channel.label}</h3>
			<p class="mt-3 text-slate-300">{channel.instructions}</p>
			<a
				class="mt-6 inline-flex items-center gap-2 text-amber-300 transition hover:text-amber-200"
				href={channel.href}
			>
				<span>Open</span>
			</a>
		</article>
	{/each}
</section>

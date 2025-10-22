<script lang="ts">
	const { title, items = [] } = $props<{
		title: string;
		items: string[];
	}>();
</script>

<div class="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
	<h3 class="text-sm font-semibold tracking-[0.3em] text-amber-300/70 uppercase">{title}</h3>
	<ul class="mt-4 flex flex-wrap gap-3 text-sm text-slate-200">
		{#each items as item (item)}
			<li class="rounded-full border border-white/10 px-3 py-1">{item}</li>
		{/each}
	</ul>
</div>

<script lang="ts">
	const { title, subtitle, eyebrow } = $props<{
		title: string;
		subtitle?: string;
		eyebrow?: string;
	}>();
</script>

<div class="mx-auto max-w-3xl space-y-2 text-center">
	{#if eyebrow}
		<p class="text-xs tracking-[0.4em] text-amber-300/80 uppercase">{eyebrow}</p>
	{/if}
	<h2 class="text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
	{#if subtitle}
		<p class="text-base text-slate-300 md:text-lg">{subtitle}</p>
	{/if}
</div>

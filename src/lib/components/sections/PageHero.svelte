<script lang="ts">
	type Cta = { label: string; href: string };

	const { eyebrow, title, subtitle, primaryCta, secondaryCta, footnote } = $props<{
		eyebrow: string;
		title: string;
		subtitle: string;
		primaryCta?: Cta;
		secondaryCta?: Cta;
		footnote?: string;
	}>();
</script>

<section class="relative overflow-hidden border-b border-white/10 bg-slate-950">
	<div
		class="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-24 md:flex-row md:items-center md:justify-between"
	>
		<div class="max-w-2xl space-y-6">
			<p class="text-sm tracking-[0.4em] text-amber-300/80 uppercase">{eyebrow}</p>
			<h1 class="text-4xl font-semibold tracking-tight text-white md:text-5xl">{title}</h1>
			<p class="text-lg text-slate-300 md:text-xl">{subtitle}</p>
			<div class="flex flex-wrap items-center gap-4">
				{#if primaryCta}
					<a
						href={primaryCta.href}
						class="rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-200"
					>
						{primaryCta.label}
					</a>
				{/if}
				{#if secondaryCta}
					<a
						href={secondaryCta.href}
						class="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-amber-300 hover:text-amber-200"
					>
						{secondaryCta.label}
					</a>
				{/if}
			</div>
			{#if footnote}
				<p class="text-sm text-slate-400">{footnote}</p>
			{/if}
		</div>
		<div
			class="relative ml-0 max-w-sm rounded-3xl border border-white/10 bg-slate-900/60 p-6 text-sm text-slate-300 shadow-lg md:ml-10"
		>
			<h2 class="text-xs tracking-[0.3em] text-amber-300/70 uppercase">Coming soon</h2>
			<p class="mt-3 leading-relaxed">
				Swap this block with a rotating project teaser, newsletter signup, or upcoming event.
				Consider driving attention to your latest Cloudflare Worker experiment or office hours.
			</p>
			<p class="mt-6 font-mono text-xs text-slate-500">
				TODO: Embed live analytics or Worker deploy status once CI/CD is configured.
			</p>
		</div>
	</div>
</section>

<script lang="ts">
	const {
		socialLinks = [],
		email,
		location
	} = $props<{
		socialLinks: { label: string; url: string }[];
		email?: string;
		location?: string;
	}>();

	const year = new Date().getFullYear();
</script>

<footer class="border-t border-white/10 bg-slate-950/80">
	<div
		class="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 text-sm text-slate-400 md:flex-row md:items-center md:justify-between"
	>
		<div>
			<p class="text-base font-semibold text-slate-100">Now playing with edge-first SvelteKit.</p>
			<p class="mt-2 max-w-md text-slate-400">
				Ship experiments, essays, and prototypes directly from the Cloudflare edge. Fill these copy
				blocks with a rotating status update, writing cadence, or newsletter CTA.
			</p>
		</div>
		<div class="flex flex-col gap-4 md:text-right">
			{#if email || location}
				<ul class="space-y-1 text-slate-300">
					{#if email}
						<li>
							<strong class="font-medium text-slate-200">Email:</strong>
							<a class="ml-2 text-amber-300 hover:text-amber-200" href={`mailto:${email}`}>
								{email}
							</a>
						</li>
					{/if}
					{#if location}
						<li>
							<strong class="font-medium text-slate-200">Location:</strong>
							<span class="ml-2">{location}</span>
						</li>
					{/if}
				</ul>
			{/if}
			{#if socialLinks.length}
				<ul class="flex flex-wrap justify-end gap-3 text-slate-300 md:justify-start">
					{#each socialLinks as social (social.label)}
						<li>
							<a
								class="transition-colors hover:text-amber-300"
								href={social.url}
								rel="me noopener"
								target="_blank"
							>
								{social.label}
							</a>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
	<div class="border-t border-white/5 bg-slate-950/90">
		<div
			class="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between"
		>
			<p>&copy; {year} Analetta Ehler. Build boldly at the edge.</p>
			<p>
				Placeholder for Cloudflare deployment metadata — surface build IDs, Worker bindings, or
				release notes here once automation is wired up.
			</p>
		</div>
	</div>
</footer>

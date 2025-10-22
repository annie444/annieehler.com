<script lang="ts">
	import type { NavLink } from '$lib/content';
	import { siteMeta } from '$lib/content';

	const {
		links = [],
		brand = siteMeta.name,
		tagline = siteMeta.tagline,
		activePath = '/'
	} = $props<{
		links: NavLink[];
		brand?: string;
		tagline?: string;
		activePath?: string;
	}>();
</script>

<header class="border-b border-white/10 bg-slate-950/80 backdrop-blur">
	<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
		<a class="group inline-flex flex-col" href="/" aria-label={`${brand} home`}>
			<span class="text-lg font-semibold tracking-tight text-white group-hover:text-amber-300">
				{brand}
			</span>
			<span class="text-sm text-slate-400">{tagline}</span>
		</a>
		<nav aria-label="Primary" class="flex gap-6 text-sm font-medium">
			{#each links as link (link.href)}
				{@const isActive =
					activePath === link.href || (activePath.startsWith(link.href) && link.href !== '/')}
				<a
					class={`transition-colors hover:text-amber-300 ${isActive ? 'text-white' : 'text-slate-400'}`}
					href={link.href}
					aria-current={isActive ? 'page' : undefined}
					data-sveltekit-preload-data
				>
					{link.title}
				</a>
			{/each}
		</nav>
	</div>
</header>

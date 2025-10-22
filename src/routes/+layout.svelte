<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import { navLinks, siteMeta } from '$lib/content';

	const { children, data } = $props<{ data: { activePath: string } }>();
	const activePath = data?.activePath ?? '/';
	const cloudflareAnalyticsToken = import.meta.env.VITE_CF_WEB_ANALYTICS_TOKEN ?? '';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{siteMeta.name}</title>
	<meta name="description" content={siteMeta.description} />
	<meta name="theme-color" content="#0f172a" />
	{#if cloudflareAnalyticsToken}
		<script
			src="https://static.cloudflareinsights.com/beacon.min.js"
			defer
			data-cf-beacon={JSON.stringify({ token: cloudflareAnalyticsToken })}
		></script>
	{/if}
</svelte:head>

<div class="min-h-screen bg-slate-950 text-slate-100">
	<div class="relative isolate flex min-h-screen flex-col overflow-hidden">
		<div
			class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,_191,_36,_0.08),_transparent_55%)]"
		></div>

		<Header links={navLinks} brand={siteMeta.name} tagline={siteMeta.tagline} {activePath} />
		<main class="flex-1">
			{@render children?.()}
		</main>
		<Footer socialLinks={siteMeta.social} email={siteMeta.email} location={siteMeta.location} />
	</div>
</div>

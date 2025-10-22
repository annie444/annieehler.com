<script lang="ts">
	import ContactChannels from '$lib/components/contact/ContactChannels.svelte';
	import SectionHeading from '$lib/components/sections/SectionHeading.svelte';
	import { contactChannels, siteMeta } from '$lib/content';
</script>

<svelte:head>
	<title>{siteMeta.name} · Contact</title>
	<meta
		name="description"
		content="Placeholder contact playbook. Explain how to collaborate, reach out, or schedule time."
	/>
</svelte:head>

<section class="mx-auto max-w-5xl px-6 py-20">
	<SectionHeading
		eyebrow="Contact"
		title="Invite conversations that spark collaboration"
		subtitle="Frame expectations, response times, and the kind of work you are eager to explore."
	/>
	<div class="mt-12 rounded-3xl border border-white/10 bg-slate-900/60 p-8 text-sm text-slate-300">
		<h3 class="text-lg font-semibold text-white">How to work together</h3>
		<p class="mt-3">
			Use this space to outline your intake process, whether you prefer async notes, booking links,
			or warm introductions. Reference Cloudflare queue automation to acknowledge incoming requests
			once the Worker is live.
		</p>
		<p class="mt-4 text-xs text-slate-400">
			TODO: Replace with a SvelteKit form action that enqueues messages to QUEUE_WEBHOOKS or sends
			via email.
		</p>
	</div>

	<ContactChannels channels={contactChannels} />

	<section
		class="mx-auto mt-16 max-w-3xl rounded-3xl border border-dashed border-amber-300/60 bg-slate-900/40 p-8 text-sm text-slate-300"
	>
		<h3 class="text-lg font-semibold text-white">Office hours template</h3>
		<p>
			Share availability, booking cadence, or community office hours. Embed a Calendly, Cal.com, or
			custom scheduling component later.
		</p>
	</section>
</section>

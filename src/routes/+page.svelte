<script lang="ts">
	import PageHero from '$lib/components/sections/PageHero.svelte';
	import SectionHeading from '$lib/components/sections/SectionHeading.svelte';
	import HighlightStats from '$lib/components/sections/HighlightStats.svelte';
	import ProjectList from '$lib/components/projects/ProjectList.svelte';
	import BlogList from '$lib/components/blog/BlogList.svelte';
	import { blogPosts, highlightStats, hero, projects, siteMeta } from '$lib/content';

	const featuredPosts = blogPosts.slice(0, 2);
</script>

<PageHero {...hero} />

<HighlightStats stats={highlightStats} />

<section class="mx-auto mt-24 max-w-6xl px-6">
	<SectionHeading
		eyebrow="Lead with generosity"
		title="Build connective tissue between systems and humans"
		subtitle="Use this area to elaborate on your practice. Mention the outcomes you care about, the mediums you work in, and the communities you steward."
	/>
	<div class="mt-10 grid gap-6 text-sm text-slate-300 md:grid-cols-3">
		<p>
			Tell a story about your approach to engineering and research. Drop TODO markers where you plan
			to embed stats, videos, or interactive demos.
		</p>
		<p>
			Consider linking to upcoming conference talks, newsletter issues, or ongoing experiments.
			Offer visitors a sneak peek into what they’ll discover deeper in the site.
		</p>
		<p>
			Add Cloudflare-specific messaging here: edge-first deployments, Workers AI prototypes, or how
			you model reliability for distributed systems. Mention where to find your infrastructure
			notes.
		</p>
	</div>
</section>

<ProjectList {projects} />

<section class="mx-auto mt-24 max-w-6xl px-6">
	<SectionHeading
		eyebrow="Latest writing"
		title="Share the playbook as you learn"
		subtitle="Swap these placeholders for MDsveX posts. Archive them in /blog and keep readers in the loop."
	/>
	<BlogList posts={featuredPosts} />
	<div class="mt-6 text-center text-sm">
		<a class="text-amber-300 transition hover:text-amber-200" href="/blog">
			Browse the full blog archive ↗
		</a>
	</div>
</section>

<section class="mx-auto mt-24 max-w-6xl px-6">
	<SectionHeading
		eyebrow="Work with me"
		title="Design sprints, architecture reviews, and joyful developer tools"
		subtitle="Outline the services or engagements you offer. Reference your Cloudflare Workers experience and any programs you run."
	/>
	<div class="mt-10 grid gap-6 text-sm text-slate-300 md:grid-cols-3">
		<div class="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
			<h3 class="text-lg font-semibold text-white">Architecture reviews</h3>
			<p class="mt-3">
				Placeholder for the questions you help teams tackle. Mention latency budgets, observability,
				and accessibility.
			</p>
		</div>
		<div class="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
			<h3 class="text-lg font-semibold text-white">Workshops & facilitation</h3>
			<p class="mt-3">
				Template the formats you love — from Cloudflare Workers bootcamps to design critiques. Drop
				call-to-action links once calendars are ready.
			</p>
		</div>
		<div class="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
			<h3 class="text-lg font-semibold text-white">Advisory & mentorship</h3>
			<p class="mt-3">
				Describe the cadence of advisory sessions, the kind of builders you support, and how to get
				on the waitlist.
			</p>
		</div>
	</div>
	<p class="mt-10 text-center text-xs text-slate-500">
		TODO: Surface real testimonials, case studies, and scheduling links. Reference Cloudflare queue
		automation for intake once implemented.
	</p>
</section>

<section
	class="mx-auto mt-24 max-w-5xl rounded-3xl border border-dashed border-amber-300/60 bg-slate-900/40 px-6 py-10 text-center text-sm text-slate-300"
>
	<p>
		{siteMeta.name} · Stay tuned for the newsletter and Cloudflare edge deployment notes. Consider linking
		Wrangler config, status pages, or RSS feeds here.
	</p>
</section>

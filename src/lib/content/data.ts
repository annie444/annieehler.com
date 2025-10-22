import type {
	BlogPost,
	CloudflareBinding,
	ContactChannel,
	EducationEntry,
	ExperienceEntry,
	HighlightStat,
	NavLink,
	NowUpdate,
	Project
} from './types.js';

export const siteMeta = {
	name: 'Analetta Ehler',
	tagline: 'Systems engineer, writer, and curious tinkerer.',
	description:
		'A modular SvelteKit portfolio: CV, blog, speaking archive, and experimental playground.',
	email: 'hello@example.com',
	location: 'Remote / North America',
	social: [
		{ label: 'GitHub', url: 'https://github.com/annie444' },
		{ label: 'LinkedIn', url: 'https://linkedin.com/in/annie444' },
		{ label: 'Mastodon', url: 'https://fosstodon.org/@annie' }
	]
};

export const hero = {
	eyebrow: 'Analetta Ehler — Edge-first engineer',
	title: 'Designing resilient systems and generous developer experiences.',
	subtitle:
		'Replace this copy with your own narrative. Offer a one-line promise, a supporting statement, and why visitors should keep scrolling.',
	primaryCta: { label: 'Download CV (PDF)', href: '/cv' },
	secondaryCta: { label: 'Explore recent projects', href: '/projects' },
	footnote:
		'Currently experimenting with Cloudflare Workers, Durable Objects, and creative tooling for distributed teams.'
};

export const highlightStats: HighlightStat[] = [
	{
		label: 'Projects shipped',
		value: '24+',
		description:
			'Production releases across embedded, edge, and full-stack ecosystems — adjust counts as your portfolio grows.'
	},
	{
		label: 'Talks given',
		value: '17',
		description: 'Conference, meetup, and podcast appearances. Link the archive once published.'
	},
	{
		label: 'Mentorship hours',
		value: '120+',
		description:
			'Mentoring devs entering edge computing. Swap in pairing, workshops, or community leadership metrics.'
	}
];

export const navLinks: NavLink[] = [
	{ title: 'Home', href: '/' },
	{ title: 'CV', href: '/cv', description: 'Experience, education, and skills' },
	{ title: 'Projects', href: '/projects', description: 'Selected open source and client work' },
	{ title: 'Blog', href: '/blog', description: 'Writing, notes, and talks' },
	{ title: 'Now', href: '/now', description: 'Current focus, experiments, and status' },
	{ title: 'Contact', href: '/contact', description: 'Ways to collaborate or say hello' }
];

export const experience: ExperienceEntry[] = [
	{
		organization: 'Example Labs',
		role: 'Principal Software Engineer',
		location: 'Remote',
		start: '2023',
		end: 'Present',
		summary:
			'Leads multidisciplinary teams shipping resilient distributed systems and developer tooling at scale.',
		achievements: [
			'Architected a Cloudflare Workers edge pipeline serving 50M+ daily requests with 4x lower latency.',
			'Championed accessibility-first design reviews and mentored engineers adopting inclusive practices.',
			'Piloted observability program combining OpenTelemetry traces with SLO-driven alerting.'
		]
	},
	{
		organization: 'Northwind Hardware',
		role: 'Senior Embedded Engineer',
		location: 'Portland, OR',
		start: '2019',
		end: '2023',
		summary: 'Shipped low-power IoT firmware and companion web dashboards for industrial sensors.',
		achievements: [
			'Reduced boot time by 60% through async initialization and Rust compile-time guarantees.',
			'Designed OTA update workflow with staged rollouts and automatic rollback heuristics.',
			'Co-authored whitepapers on resilient telemetry pipelines for harsh environments.'
		]
	}
];

export const cvHighlights = {
	statement:
		'Update this paragraph with your positioning statement — highlight the scale, domains, or teams you lead.',
	focusAreas: [
		'Edge compute architecture',
		'Developer experience tooling',
		'Embedded systems',
		'Community leadership'
	],
	availableFor: ['Fractional architecture reviews', 'Keynote opportunities', 'Mentoring circles'],
	currentResearch:
		'Exploring how Workers AI and Durable Objects can power low-latency creative tooling for distributed teams.'
};

export const education: EducationEntry[] = [
	{
		institution: 'University of Cascadia',
		area: 'Computer Engineering',
		credential: 'M.S.',
		start: '2017',
		end: '2019'
	},
	{
		institution: 'Pacific Northwest College of Art',
		area: 'Human-Centered Design',
		credential: 'B.F.A.',
		start: '2012',
		end: '2016'
	}
];

export const skills = {
	languages: ['TypeScript', 'Rust', 'Python', 'C/C++'],
	frameworks: ['SvelteKit', 'Cloudflare Workers', 'Tailwind CSS', 'Vitest'],
	focusAreas: ['Edge compute', 'DX tooling', 'Accessibility', 'Observability'],
	tooling: ['Wrangler', 'Workers AI', 'OpenTelemetry', 'Playwright']
};

export const projects: Project[] = [
	{
		slug: 'chroma-compiler',
		title: 'Chroma Compiler',
		summary:
			'Zero-config build pipeline that compiles design tokens to CSS variables and Workers KV caches.',
		contribution: 'Created compiler architecture, auth flows, and developer documentation.',
		links: { github: 'https://github.com/annie444/chroma-compiler' },
		technologies: ['SvelteKit', 'Cloudflare Workers', 'GraphQL', 'Vitest'],
		status: 'In maintenance — preparing v2 release candidate.'
	},
	{
		slug: 'lumen-notes',
		title: 'Lumen Notes',
		summary:
			'Offline-first research notebook synchronised through Durable Objects with encrypted search.',
		contribution:
			'Led synchronization design, wrote Workers Rust bindings, and built UI components.',
		links: { github: '#', live: 'https://notes.example.com' },
		technologies: ['Svelte', 'IndexedDB', 'Durable Objects', 'Playwright'],
		status: 'Private beta with select research teams.'
	},
	{
		slug: 'relaycast',
		title: 'Relaycast',
		summary:
			'Live audio stream router that transcodes on the edge and exposes real-time analytics.',
		contribution: 'Built ingestion pipeline, WebRTC signaling, and analytics dashboards.',
		links: { github: '#', live: '#' },
		technologies: ['Cloudflare Workers', 'WebRTC', 'SvelteKit', 'Grafana'],
		status: 'Archived — revisit for case study outline.'
	}
];

export const blogPosts: BlogPost[] = [
	{
		slug: 'edge-first-sveltekit',
		title: 'Edge-first SvelteKit Architectures',
		subtitle: 'Deploying resilient, fast sites on Cloudflare Workers',
		summary:
			'A tour of deployment patterns, build optimizations, and observability tactics when shipping SvelteKit to the edge.',
		publishedAt: '2024-09-10',
		readingTime: '8 min',
		tags: ['SvelteKit', 'Cloudflare', 'DX'],
		content: `
			<p>
				This placeholder article outlines how to tailor SvelteKit projects for Cloudflare Workers. Highlight
				the importance of progressive enhancement, streaming SSR, and routing strategies.
			</p>
			<p>
				Use this template to introduce your readers to the problem space, narrate decisions, and provide
				copy-pastable snippets. Swap these paragraphs for MDsveX content as soon as you draft your first post.
			</p>
		`
	},
	{
		slug: 'career-notes-2024',
		title: 'Career Notes — 2024',
		subtitle: 'Lessons from edge computing, embedded systems, and devrel',
		summary:
			'Reflect on projects, speaking engagements, and experiments that shaped your practice this year.',
		publishedAt: '2024-07-22',
		readingTime: '6 min',
		tags: ['Career', 'Edge', 'Community'],
		content: `
			<p>
				Capture highlights from conferences, product launches, or experiments. Each section can map to the
				speaking archive, project cards, or long-term initiatives described elsewhere on the site.
			</p>
		`
	},
	{
		slug: 'workers-observability-starter',
		title: 'Workers Observability Starter Pack',
		subtitle: 'Scrapbook notes on logging, tracing, and dashboards',
		summary:
			'Lay out how you bootstrap telemetry for edge apps. Mention pending blog series or livestream ideas.',
		publishedAt: '2024-05-14',
		readingTime: '5 min',
		tags: ['Observability', 'Cloudflare', 'Tooling'],
		content: `
			<p>
				Document the dashboards, CLI commands, and alerts you rely on. Replace these callouts with your
				preferred stack once you have screenshots and charts ready.
			</p>
		`
	}
];

export const contactChannels: ContactChannel[] = [
	{
		label: 'Email',
		href: 'mailto:hello@example.com',
		instructions: 'Best for consulting inquiries, speaking invites, or long-form notes.',
		type: 'async'
	},
	{
		label: 'Calendly',
		href: 'https://cal.com/annie/intro',
		instructions: 'Book a 25-minute intro session to explore collaborations or office hours.',
		type: 'realtime'
	},
	{
		label: 'Mastodon',
		href: 'https://fosstodon.org/@annie',
		instructions: 'Say hi, share an article, or continue conversations from events.',
		type: 'social'
	}
];

export const nowUpdate: NowUpdate = {
	period: 'Fall 2025',
	summary:
		'Use this living log to share what you are learning, building, and stewarding. Update quarterly or monthly.',
	experiments: [
		'Prototyping a SvelteKit + Workers AI playground for generative documentation audits.',
		'Writing a zine on edge-first architecture patterns with MDsveX and SSG fallbacks.',
		'Redesigning workshop slides to emphasise disability-first facilitation techniques.'
	],
	learning: [
		'Deep dive into Durable Objects alarms and cron triggers.',
		'Workflows for syncing Wrangler deploys with GitHub Environments.',
		'Iterating on inclusive design critique formats.'
	],
	focus: {
		shipping: 'Preparing v2 of Chroma Compiler with KV-backed previews.',
		community: 'Hosting a monthly remote salon on resilient systems for indie teams.',
		personal: 'Cultivating a hiking log and photography habit across the Cascades.'
	}
};

export const cloudflareBindings: CloudflareBinding[] = [
	{
		name: 'KV_SITE_CACHE',
		type: 'kv',
		description: 'Cache metadata for blog posts, project cards, and resume exports.',
		placeholder:
			'Replace with your KV namespace ID via wrangler.toml — e.g. binding = "KV_SITE_CACHE".'
	},
	{
		name: 'D1_CONTENT',
		type: 'd1',
		description: 'Optional relational store for long-form writing drafts or workshop library.',
		placeholder: 'Generate with `wrangler d1 create` and sync migrations under ./drizzle.'
	},
	{
		name: 'QUEUE_WEBHOOKS',
		type: 'queue',
		description: 'Process inbound contact form events and fan out to Slack or email.',
		placeholder: 'Add when contact automation is ready. Document payload schema in README.'
	},
	{
		name: 'R2_ARCHIVE',
		type: 'r2',
		description: 'Store media assets, slide decks, and downloadable resources.',
		placeholder: 'Map to your R2 bucket and mention retention policy in documentation.'
	}
];

export function findPostBySlug(slug: string): BlogPost | undefined {
	return blogPosts.find((post) => post.slug === slug);
}

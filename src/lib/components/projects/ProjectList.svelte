<script lang="ts">
	import type { Project } from '$lib/content';

	const { projects = [] } = $props<{ projects: Project[] }>();
</script>

<section class="mx-auto mt-16 grid max-w-6xl gap-8 px-6 md:grid-cols-2">
	{#each projects as project (project.title)}
		<article
			class="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-lg shadow-amber-300/5 transition hover:border-amber-300/60"
		>
			<div class="space-y-4">
				<p class="text-xs tracking-[0.3em] text-amber-300/70 uppercase">
					{project.status ?? 'Roadmap'}
				</p>
				<h3 class="text-2xl font-semibold text-white">{project.title}</h3>
				<p class="text-sm text-slate-300">{project.summary}</p>
				<p class="text-xs text-slate-400">Contribution: {project.contribution}</p>
			</div>
			<div class="mt-8 space-y-4 text-sm">
				<div class="flex flex-wrap gap-2 text-xs tracking-[0.15em] text-slate-400 uppercase">
					{#each project.technologies as tech (tech)}
						<span class="rounded-full border border-white/10 px-3 py-1">{tech}</span>
					{/each}
				</div>
				<div class="flex gap-4 text-sm">
					{#if project.links.github}
						<a
							class="text-amber-300 transition hover:text-amber-200"
							href={project.links.github}
							target="_blank"
							rel="noopener"
						>
							GitHub
						</a>
					{/if}
					{#if project.links.live}
						<a
							class="text-amber-300 transition hover:text-amber-200"
							href={project.links.live}
							target="_blank"
							rel="noopener"
						>
							Live demo
						</a>
					{/if}
				</div>
			</div>
		</article>
	{/each}
</section>

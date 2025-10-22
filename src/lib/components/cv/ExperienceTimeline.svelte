<script lang="ts">
	import type { EducationEntry, ExperienceEntry } from '$lib/content';

	const { experiences = [], education = [] } = $props<{
		experiences: ExperienceEntry[];
		education: EducationEntry[];
	}>();
</script>

<section class="mx-auto mt-16 grid max-w-5xl gap-12 px-6 md:grid-cols-2">
	<div>
		<h3 class="text-xl font-semibold text-white">Selected experience</h3>
		<ul class="mt-6 space-y-8">
			{#each experiences as role (role.role + role.start)}
				<li class="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
					<p class="text-xs tracking-[0.3em] text-amber-300/70 uppercase">
						{role.start} – {role.end}
					</p>
					<p class="mt-2 text-lg font-semibold text-white">{role.role}</p>
					<p class="text-sm text-slate-300">{role.organization} · {role.location}</p>
					<p class="mt-4 text-sm text-slate-200">{role.summary}</p>
					<ul class="mt-4 space-y-2 text-sm text-slate-400">
						{#each role.achievements as achievement (achievement)}
							<li>{achievement}</li>
						{/each}
					</ul>
				</li>
			{/each}
		</ul>
	</div>
	<div>
		<h3 class="text-xl font-semibold text-white">Education</h3>
		<ul class="mt-6 space-y-6">
			{#each education as item (item.credential + item.institution)}
				<li class="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
					<p class="text-xs tracking-[0.3em] text-amber-300/70 uppercase">
						{item.start} – {item.end}
					</p>
					<p class="mt-2 text-lg font-semibold text-white">{item.credential} · {item.area}</p>
					<p class="text-sm text-slate-300">{item.institution}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

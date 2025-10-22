<script lang="ts">
	import { createAnimatable } from 'animejs';

	let orb: HTMLDivElement | undefined;

	$effect(() => {
		if (!orb) return;

		const orbAnim = createAnimatable(orb, {
			x: 500,
			y: 500,
			ease: 'out(3)'
		});

		const handleMouseMove = (event: MouseEvent) => {
			const offsetW = (orb!.offsetWidth * 7) / 16;
			orbAnim.x(event.clientX - offsetW).y(event.clientY - orb!.offsetHeight - 10);
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	});
</script>

<div bind:this={orb} class="block h-16 w-16 rounded-full bg-green-600"></div>

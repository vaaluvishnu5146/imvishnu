<script lang="ts">
	import { spring } from 'svelte/motion';
	import { pannable } from '$lib/pannable';
	import { onMount } from 'svelte';

	let imgElement: any;

	const coords = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.2,
			damping: 0.4
		}
	);

	function handlePanStart() {
		coords.stiffness = coords.damping = 1;
	}

	function handlePanMove(event: any) {
		coords.update(($coords) => ({
			x: $coords.x + event.detail.dx,
			y: $coords.y + event.detail.dy
		}));
	}

	function handlePanEnd(event: any) {
		coords.stiffness = 0.2;
		coords.damping = 0.4;
		coords.set({ x: 0, y: 0 });
	}

	onMount(() => {
		imgElement.addEventListener('panstart', handlePanStart);
		imgElement.addEventListener('panmove', handlePanMove);
		imgElement.addEventListener('panend', handlePanEnd);
	});
</script>

<main class="">
	<section class="flex justify-center flex-col items-center">
		<img
			bind:this={imgElement}
			src="/images/experiment.webp"
			alt="hybrid hero"
			class="lg:h-60 w-60 cursor-move -z-20 md:z-0"
			use:pannable
			style="transform:
			translate({$coords.x}px,{$coords.y}px)
			rotate({$coords.x * 0.2}deg)"
		/>
		<div class="text-4xl lg:text-6xl mt-14">I ❤️ Teaching Tech</div>
		<span class="lg:text-2xl text-center px-6">Zero to hero in Frontend development</span>
		<div class="grid grid-cols-2 w-full gap-4 px-4 mt-4 lg:px-96 mb-8">
			<a href="https://create-svelte-docs-theme.vercel.app/" target="_blank">
				<div class="h-40 border rounded-2xl p-4 flex justify-center items-center flex-col">
					<div class="text-6xl">HTML</div>
					<div class="-mt-4">Basic To Advanced</div>
				</div>
			</a>

			<a href="https://gramlib.netlify.app/" target="_blank">
				<div class="h-40 border rounded-2xl p-4 flex justify-center items-center flex-col">
					<div class="text-6xl">CSS</div>
					<div class="-mt-4">Basic To Advanced</div>
				</div>
			</a>

			<a href="https://create-svelte-docs-theme.vercel.app/" target="_blank">
				<div class="h-40 border rounded-2xl p-4 flex justify-center items-center flex-col">
					<div class="text-6xl">JAVASCRIPT</div>
					<div class="-mt-4">Basic To Advanced</div>
				</div>
			</a>

			<a href="https://gramlib.netlify.app/" target="_blank">
				<div class="h-40 border rounded-2xl p-4 flex justify-center items-center flex-col">
					<div class="text-6xl">BOOTSTRAP</div>
					<div class="-mt-4">Basic To Advanced</div>
				</div>
			</a>
		</div>

		<div class="text-4xl lg:text-6xl mt-14">Client Works</div>
		<span class="lg:text-2xl text-center px-6">Client UI/UX Works</span>
		<div class="grid grid-cols-2 w-full gap-4 px-4 mt-4 lg:px-96 mb-8">
			<a href="https://rishasaestheluxe.com/" target="_blank">
				<div class="h-40 border rounded-2xl p-4 flex justify-center items-center flex-col">
					<div class="text-6xl">Rishas</div>
					<div class="-mt-4">Risha's Aestheluxe</div>
				</div>
			</a>
		</div>

		<div class="text-4xl lg:text-6xl mt-14">UI/UX Experiments</div>
		<span class="lg:text-2xl text-center px-6">My UI/UX Experiments</span>
		<div class="grid grid-cols-2 w-full gap-4 px-4 mt-4 lg:px-96 mb-8">
			<a
				href="https://www.figma.com/proto/3YWE9xwlwhwLcrQYputt7e/Risha's-Aestheluxe?page-id=49%3A469&node-id=49-932&viewport=457%2C586%2C0.11&t=Qv4KN2tNRn6ZAxlP-1&scaling=min-zoom&content-scaling=fixed"
				target="_blank"
			>
				<div class="h-40 border rounded-2xl p-4 flex justify-center items-center flex-col">
					<div class="text-6xl">Rishas</div>
					<div class="-mt-4">Risha's Aestheluxe</div>
				</div>
			</a>
		</div>
	</section>
</main>

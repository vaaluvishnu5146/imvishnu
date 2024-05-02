<script>
	import './app.css';
	import { EllipsisVertical } from 'lucide-svelte';
	import { Drawer, Button, CloseButton, A } from 'flowbite-svelte';
	import { sineIn } from 'svelte/easing';

	let hidden8 = true;
	let transitionParamsBottom = {
		y: 320,
		duration: 200,
		easing: sineIn
	};
</script>

<div>
	<nav class="p-4 flex justify-between items-center sticky top-0 glass md:px-32">
		<div class="text-2xl">I'm Anandhu</div>
		<button class="cursor-pointer" on:click={() => (hidden8 = false)}><EllipsisVertical /></button>
	</nav>
	<slot />
	<Drawer
		placement="bottom"
		width="w-full"
		transitionType="fly"
		transitionParams={transitionParamsBottom}
		bind:hidden={hidden8}
		id="sidebar8"
	>
		<div class="flex items-center"></div>
		<p class="max-w-lg mb-6 text-sm text-gray-500 dark:text-gray-400">
			Supercharge your hiring by taking advantage of our <a
				href="/"
				class="text-primary-600 underline dark:text-primary-500 hover:no-underline"
			>
				limited-time sale
			</a>
			for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design
			job board.
		</p>
		<Button color="light" href="/">Learn more</Button>
		<Button href="/" class="px-4">Get access</Button>
	</Drawer>
	<footer class="bg-black p-2 flex justify-center">
		<div class="text-white text-sm">Coded With Love © 2024</div>
	</footer>
</div>

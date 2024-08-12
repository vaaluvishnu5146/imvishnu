<script>
	import './app.css';
	import { EllipsisVertical } from 'lucide-svelte';
	import { Drawer } from 'flowbite-svelte';
	import { sineIn } from 'svelte/easing';
	import { Howl } from 'howler';

	const click = new Howl({
		src: ['/sounds/whoosh.wav']
	});

	function playWoosh() {
		click.play();
	}

	let hidden8 = true;
	let transitionParamsBottom = {
		y: 320,
		duration: 200,
		easing: sineIn
	};
</script>

<div>
	<nav class="p-4 flex justify-between items-center sticky top-0 glass md:px-32 z-50">
		<a href="/"><div class="text-2xl">I'm Vishnu</div></a>
		<button
			class="cursor-pointer"
			on:click={() => {
				hidden8 = false;
				playWoosh();
			}}
			aria-label="Click To Show Drawer"><EllipsisVertical /></button
		>
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
		<div class="flex items-center lg:text-2xl">Whats's New From Me?</div>
		<p class="max-w-lg mb-6 text-sm text-gray-500 dark:text-gray-400 lg:text-xl">
			Something awesome is cooking!
		</p>
		<div class="flex gap-8">
			<button class="pixel2 lg:text-xl" aria-label="click to learn more about the code"
				>Learn more</button
			>
			<a
				href="https://medium.com/@vaaluvishnu5146"
				class="text-black underline dark:text-primary-500 hover:no-underline"
			>
				<button class="px-4 pixel2 lg:text-xl" aria-label="click to read blog">Blogs</button>
			</a>
		</div>
	</Drawer>
	<footer class="bg-black p-2 flex justify-center">
		<div class="text-white text-sm">Coded With Love © 2024</div>
	</footer>
</div>

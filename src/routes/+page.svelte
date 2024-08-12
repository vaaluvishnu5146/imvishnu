<script lang="ts">
	import { spring } from 'svelte/motion';
	import { pannable } from '$lib/pannable';
	import { onMount } from 'svelte';
	import { Howl } from 'howler';

	let imgElement: any;

	const click = new Howl({
		src: ['/sounds/click.mp3']
	});

	function playSound() {
		click.play();
	}

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
	<!-- Main Section -->
	<section class="flex justify-center flex-col items-center h-[90vh]">
		<img
			bind:this={imgElement}
			src="/images/profile-pic.png"
			alt="hero section"
			class="lg:h-60 w-60 cursor-move -z-20 md:z-0"
			use:pannable
			style="transform:
			translate({$coords.x}px,{$coords.y}px)
			rotate({$coords.x * 0.2}deg)"
		/>
		<h1 class="text-4xl lg:text-6xl">Hi I'm Vishnu Vardhan</h1>
		<span class="lg:text-2xl"
			>Full Stack Developer Loves To Build Web and Native Software Applications</span
		>
		<a href="/hybrid"
			><button
				class="pixel2 p-2 m-4"
				aria-label="Click to know more about vishnu"
				on:click={playSound}>Know More</button
			></a
		>
	</section>

	<!-- Footer -->
	<section
		class="bg-black text-white p-4 md:px-32 flex flex-col text-center md:text-xl md:py-20 items-center"
	>
		<h2 class="text-xl md:text-4xl">About Me</h2>
		<p>
			I'm From Bengaluru (The South Part of India). Where I working as a Software Engineer For The
			Last 8 Years. I love to build Cloud Native and Scalable Applications. I Blog and Vlog too...
		</p>
		<a href="https://drive.google.com/uc?export=download&id=1-cLI-vmGCtG8jzaqawrXLeIceGjUyWMd"
			><button
				class="pixel1 p-2 m-4 w-[200px] relative"
				aria-label="Click To Download my Resume"
				on:click={playSound}
			>
				Download Resume <img
					src="/images/bugcss.svg"
					alt="buggsy bug"
					class="w-10 absolute top-0 right-0 -rotate-45"
				/></button
			></a
		>

		<div class="flex items-center justify-center flex-col md:items-center">
			<div class="text-xl mt-8">Socials</div>
			<div class="flex gap-1 justify-center items-center">
				<a
					href="https://www.npmjs.com/~vishnu5146"
					target="_blank"
					aria-label="click to visit npm profile"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M4 10v4h2v-3h1v3h1v-4zm5 0v5h2v-1h2v-4zm3 1v2h-1v-2zm2-1v4h2v-3h1v3h1v-3h1v3h1v-4zM3 9h18v6h-9v1H8v-1H3z"
						/>
					</svg></a
				>

				<a
					href="https://github.com/vaaluvishnu5146?tab=repositories"
					target="_blank"
					aria-label="click to visit github profile"
					><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
						/>
					</svg></a
				>

				<a
					href="https://www.linkedin.com/in/vishnu-vardhan-balasundaram-851490196/"
					target="_blank"
					aria-label="click to visit linkedin page"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
						/>
					</svg></a
				>
				<a
					href="https://medium.com/@vaaluvishnu5146"
					target="_blank"
					aria-label="click to visit spotify artist page"
				>
					<svg
						fill="none"
						height="3em"
						viewBox="0 0 92 92"
						width="3em"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="m49.0769 47.0045c0 7.8392-6.4616 14.2047-14.4662 14.2047s-14.4662-6.3655-14.4662-14.2047 6.4616-14.2047 14.4662-14.2047 14.4662 6.3655 14.4662 14.2047zm15.8485 0c0 7.3689-3.2468 13.3581-7.2331 13.3581-3.9862 0-7.2331-5.9892-7.2331-13.3581s3.2469-13.3581 7.2331-13.3581c3.9863 0 7.2331 5.9579 7.2331 13.3581zm6.4937 0c0 6.6163-1.1251 11.9784-2.5396 11.9784-1.4144 0-2.5396-5.3621-2.5396-11.9784s1.1252-11.9784 2.5396-11.9784c1.4145 0 2.5396 5.3621 2.5396 11.9784z"
							fill="#fff"
						/></svg
					>
				</a>
			</div>
		</div>
	</section>
</main>

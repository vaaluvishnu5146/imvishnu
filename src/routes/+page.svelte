<script lang="ts">
	import Navbar from '$lib/navbar.svelte';
	import '../app.css';
</script>

<Navbar />
<main>
	<section
		class="h-screen bg-yellow-400 px-4 flex flex-col justify-center items-start lg:px-24 lg:grid lg:grid-cols-2"
	>
		<div class="lg:flex lg:flex-col lg:items-start lg:h-full lg:justify-center justify-center">
			<div class="font-kalnia text-4xl font-medium lg:text-6xl">Your Neighbourhood Developer.</div>
			<div class="font-light mt-4">Full Stack Developer who loves to build hybrid applications</div>
			<button class="bg-black text-white p-2 rounded-full mt-4 text-sm">Download Resume</button>
		</div>
		<div></div>
	</section>
</main>

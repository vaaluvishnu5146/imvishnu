<script lang="ts">
	import Navbar from '$lib/navbar.svelte';
	import '../app.css';
</script>

<Navbar />
<main>
	<section
		class="bg-yellow-400 px-4 flex flex-col justify-center items-start lg:px-24 lg:grid lg:grid-cols-2"
	>
		<div class="lg:flex lg:flex-col lg:items-start lg:justify-center justify-center mt-96 lg:mt-60">
			<div class="font-kalnia text-4xl font-medium lg:text-6xl">Your Neighbourhood Developer.</div>
			<div class="font-light mt-4">Full Stack Developer who loves to build hybrid applications</div>
			<button class="bg-black text-white p-2 rounded-full mt-4 text-xs">Download Resume</button>

			<div class="mt-72 flex flex-col text-end">
				<div class="font-kalnia text-4xl font-medium lg:text-6xl">Experience</div>
				<div class="font-bold mt-4">Grampro Business Services Pvt. Ltd.</div>
				<div class="font-light italic">March 2023 - Present</div>
				<div class="font-light mt-4">
					Working as a Full Stack Developer & Collaborating with a team of 6 members in research and
					development(R&D) wing of the company.
				</div>
			</div>
		</div>
	</section>
</main>

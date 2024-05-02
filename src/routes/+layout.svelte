<script>
	import './app.css';
	import { EllipsisVertical } from 'lucide-svelte';
</script>

<div>
	<nav class="p-4 flex justify-between items-center sticky top-0 glass">
		<div class="text-2xl">I'm Anandhu</div>
		<div><EllipsisVertical /></div>
	</nav>
	<slot />
	<footer class="bg-black p-2 flex justify-center">
		<div class="text-white text-sm">Coded With Love © 2024</div>
	</footer>
</div>

<script>
	let { name, role, img, trunc = true } = $props();

	$effect(() => {
		if (trunc) {
			// Truncate last name to X.
			name = name.split(' ')[0] + ' ' + name.split(' ')[1][0] + '.';
		}
	});
</script>

<div
	class="font-jetbrains border-content-gutter bg-raisin flex aspect-2/3 h-full w-40 flex-col items-center justify-start border p-4"
>
	<div class="mb-4 aspect-square w-full overflow-hidden rounded-xl">
		<img
			src={img}
			alt={name}
			class="aspect-square rounded-xl object-cover object-center grayscale transition-all ease-out hover:scale-110 hover:rotate-5 hover:grayscale-0"
		/>
	</div>
	<h3 class="text-lavender pointer-events-none mb-1 text-lg">{name}</h3>
	<p class="text-snowflake pointer-events-none text-center text-xs">{role}</p>
</div>

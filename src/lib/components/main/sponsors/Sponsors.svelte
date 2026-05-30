<script>
	import { ChevronsRight, ChevronsLeft } from '@lucide/svelte/icons';
	import { sponsorsGrouped, sponsorLabels } from '$lib/data/sponsors';
</script>

{#each Object.entries(sponsorsGrouped) as [tier, tierSponsors]}
	{#if tierSponsors.length}
		<div class="mt-8 w-full">
			<div class="mt-4 flex flex-wrap justify-center gap-2">
				{#each tierSponsors as sponsor}
					<div class="card m-2">
						<a href={sponsor.href} target="_blank">
							<img src={sponsor.logo} alt={sponsor.name} class="h-10" />
						</a>
					</div>
				{/each}
			</div>
		</div>
		<div class="text-snowflake mt-4 flex w-[60%] flex-row items-center justify-around gap-2">
			<ChevronsRight />{sponsorLabels[tier]}<ChevronsLeft />
		</div>
	{/if}
{/each}

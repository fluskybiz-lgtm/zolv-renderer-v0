<script lang="ts">
	let { data } = $props();
</script>

{#if data.client}
	<div style="border-top: 10px solid {data.client.primary_color}; padding: 20px;">
		<h1>Bienvenue chez {data.client.client_name}</h1>
		<p>Ma couleur préférée est : <span style="color: {data.client.primary_color}">{data.client.primary_color}</span></p>
	</div>
{:else}
	<h1>Zolv Renderer</h1>
	<p>Aucun client détecté. Essayez <code>?client=angela</code></p>
{/if}
<script lang="ts">
	let { data } = $props();
</script>

<h1>Renderer Zolv v0</h1>
<p>Client actuel : <strong>{data.clientName}</strong></p>

{#if data.clientName === "Aucun client détecté"}
	<p style="color: orange;">Accédez à une URL type : <em>angela.votre-url.pages.dev</em></p>
{/if}
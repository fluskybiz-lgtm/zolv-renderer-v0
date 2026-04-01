<script lang="ts">
	let { data } = $props();
	
	// On extrait le contenu JSON ou on met des valeurs par défaut vides
	const content = data.client?.content || {};
</script>

{#if data.client}
	<div style="border-top: 10px solid {data.client.primary_color}; font-family: sans-serif; padding: 0;">
		
		<section style="padding: 60px 20px; text-align: center; background-color: #f9f9f9;">
			<h1 style="font-size: 3rem; margin-bottom: 10px;">
				{content.hero_title || "Bienvenue"}
			</h1>
			<p style="font-size: 1.2rem; color: #666; margin-bottom: 30px;">
				{content.hero_subtitle || ""}
			</p>
			
			<button style="
				background-color: {data.client.primary_color}; 
				color: white; 
				border: none; 
				padding: 15px 30px; 
				font-size: 1rem; 
				border-radius: 5px; 
				cursor: pointer;
			">
				{content.cta_text || "En savoir plus"}
			</button>
		</section>

		<footer style="padding: 20px; text-align: center; font-size: 0.8rem; color: #999;">
			© {new Date().getFullYear()} {data.client.client_name} - Propulsé par Zolv
		</footer>
	</div>
{:else}
	<div style="text-align: center; padding: 50px;">
		<h1>Zolv Renderer</h1>
		<p>Identifiant client manquant ou invalide.</p>
	</div>
{/if}
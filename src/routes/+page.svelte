<script lang="ts">
	import { supabase } from '$lib/supabase';
	let { data } = $props();
	
	const content = data.client?.content || {};

	let email = $state('');
	let loading = $state(false);
	let success = $state(false);

	async function handleSubmit(e: Event) {
		e.preventDefault();
		loading = true;
		
		const { error } = await supabase.from('leads').insert({
			email,
			funnel_id: data.client.id
		});

		loading = false;
		if (!error) success = true;
	}
</script>

{#if data.client}
	<div style="border-top: 10px solid {data.client.primary_color}; font-family: sans-serif; min-height: 100vh; background-color: #f9f9f9;">
		
		<nav style="padding: 20px; display: flex; justify-content: center; align-items: center; background: white;">
			{#if content.logo_url}
				<img src={content.logo_url} alt="Logo" style="height: 60px;" />
			{:else}
				<span style="font-weight: bold; font-size: 1.5rem;">{data.client.client_name}</span>
			{/if}
		</nav>

		<section style="padding: 60px 20px; text-align: center;">
			<h1 style="font-size: 3rem; margin-bottom: 10px; color: #1a1a1a;">
				{content.hero_title || "Bienvenue"}
			</h1>
			<p style="font-size: 1.2rem; color: #666; margin-bottom: 40px;">
				{content.hero_subtitle || ""}
			</p>
			
			<div style="max-width: 400px; margin: 0 auto; background: white; padding: 30px; border-radius: 12px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);">
				{#if success}
					<div style="color: #059669; background: #ecfdf5; padding: 20px; border-radius: 8px; font-weight: bold;">
						C'est tout bon ! Merci pour votre inscription.
					</div>
				{:else}
					<form onsubmit={handleSubmit} style="display: flex; flex-direction: column; gap: 15px;">
						<input 
							type="email" 
							bind:value={email} 
							placeholder="Votre adresse email" 
							required 
							style="padding: 14px; border: 1px solid #e5e7eb; border-radius: 6px; font-size: 1rem;"
						/>
						<button 
							type="submit" 
							disabled={loading}
							style="background: {data.client.primary_color}; color: white; border: none; padding: 16px; border-radius: 6px; font-size: 1.1rem; font-weight: bold; cursor: pointer; transition: opacity 0.2s;"
						>
							{loading ? 'Traitement...' : content.cta_text || 'S\'inscrire'}
						</button>
					</form>
				{/if}
			</div>
		</section>

		<footer style="padding: 40px 20px; text-align: center; font-size: 0.8rem; color: #999;">
			© {new Date().getFullYear()} {data.client.client_name} - Propulsé par Zolv
		</footer>
	</div>
{:else}
	<div style="text-align: center; padding: 100px 20px; font-family: sans-serif;">
		<h1 style="color: #ef4444;">Oups !</h1>
		<p>Nous n'avons pas pu charger ce tunnel. Vérifiez l'identifiant client.</p>
	</div>
{/if}
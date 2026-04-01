import { supabase } from '$lib/supabase';

export const load = async ({ locals }) => {
	const slug = locals.subdomain;

	if (!slug) {
		return { client: null };
	}

	// On va chercher les infos du client dans Supabase
	const { data: funnel, error } = await supabase
		.from('funnels')
		.select('*')
		.eq('slug', slug)
		.single();

	if (error || !funnel) {
		console.error("Erreur Supabase:", error);
		return { client: null, error: "Client non trouvé" };
	}

	return {
		client: funnel
	};
};
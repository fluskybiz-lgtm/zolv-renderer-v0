export const load = ({ locals }) => {
	// On récupère le sous-domaine que le Hook a extrait
	return {
		clientName: locals.subdomain || "Aucun client détecté"
	};
};
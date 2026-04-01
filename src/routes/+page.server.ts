export const load = ({ locals }) => {
    console.log("Subdomain détecté :", locals.subdomain);
	// On récupère le sous-domaine que le Hook a extrait
	return {
		clientName: locals.subdomain || "Aucun client détecté"
	};
};
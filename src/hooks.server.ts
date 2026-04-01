import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const url = new URL(event.request.url);
	const hostname = url.hostname;

	// On extrait le sous-domaine
	// Exemple: 'angela.zolv-renderer-v0.pages.dev' -> 'angela'
	const parts = hostname.split('.');
	
	// Si on est sur localhost ou l'URL directe, on n'a pas forcément de sous-domaine
	let subdomain = null;
	if (parts.length > 3) {
		subdomain = parts[0];
	}

	// On injecte cette info dans 'event.locals' pour qu'elle soit 
	// accessible partout dans l'app (pages, layouts, etc.)
	event.locals.subdomain = subdomain;

	return resolve(event);
};
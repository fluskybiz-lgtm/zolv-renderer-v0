import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    const url = new URL(event.request.url);
    
    // 1. On cherche dans le paramètre ?client=...
    let client = url.searchParams.get('client');

    // 2. Si pas trouvé, on cherche dans le sous-domaine
    if (!client) {
        const parts = url.hostname.split('.');
        if (parts.length > 3) client = parts[0];
    }

    event.locals.subdomain = client;
    return resolve(event);
};
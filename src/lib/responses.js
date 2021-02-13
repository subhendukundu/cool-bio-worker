export const html = (html, headers = {}) =>
	new Response(html, {
		headers: {
			'content-type': 'text/html',
			'X-XSS-Protection': '1; mode=block',
			'X-Content-Type-Options': 'nosniff',
			'X-Frame-Options': 'DENY',
			'cache-control': 'no-cache, max-age=0',
			...headers,
		},
	})

export const notFound = (html, headers = {}) =>
	new Response(html, {
		headers: {
			'content-type': 'text/html',
			'X-XSS-Protection': '1; mode=block',
			'X-Content-Type-Options': 'nosniff',
			'X-Frame-Options': 'DENY',
			'Feature-Policy': 'none',
			...headers,
		},
		status: 404,
	})

export const text = text =>
	new Response(text, {
		headers: { 'content-type': 'text/plain' },
	})

export const json = icon =>
	new Response(icon, {
		headers: { 'content-type': 'image/vnd.microsoft.icon' },
	})

export const xml = icon =>
	new Response(icon, {
		headers: { 'content-type': 'application/xml' },
	})

export const redirect = url => Response.redirect(url)

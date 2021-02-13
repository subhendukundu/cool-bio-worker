import * as response from '../lib/responses'

export const route = '/sitemap.xml'

const getSitemap = pages => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	${pages
		.map(page => {
			return `
				<url>
					<loc>${`https://cool.bio/${page.name}`}</loc>
				</url>
			`
		})
		.join('')}
</urlset>
`

const filePost = async () => {
	const files = await cool_bio_profiles.list({ limit: 200 })
	console.log(files)
	const sitemaps = getSitemap(files.keys)
	console.log(sitemaps)
	return response.xml(sitemaps)
}

export default filePost

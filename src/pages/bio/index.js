import * as response from '../../lib/responses'
import notFound from '../../lib/notfound'
import bio from '../../lib/bio'

export const route = '/(?<id>.+)'

const getBio = async ({ params }) => {
	const { id } = params
	const data = await cool_bio_profiles.get(id, 'json')
	console.log('data called')
	if (!data) {
		const template = notFound({
			title: 'Cool!',
			text: `@${id} not taking appointments at the moment!`,
		})
		return response.notFound(template)
	}
	const {
		forwardLink,
		name,
		userName,
		socialLinks,
		image,
		appointmentsEnabled,
		links,
	} = data
	if (forwardLink) {
		return response.redirect(forwardLink)
	}
	console.log(links)
	const template = bio({
		name,
		userName,
		socialLinks,
		image,
		appointmentsEnabled,
		links,
	})
	return response.html(template)
}

export default getBio

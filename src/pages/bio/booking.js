import * as response from '../../lib/responses'
import notFound from '../../lib/notfound'
export const route = '/(?<id>.+)/booking'

const fileList = async ({ params }) => {
	const { id } = params
	const file = await cool_bio_profiles.get(id, 'json')
	console.log(file)
	if (!file) {
		const template = notFound({
			title: 'Cool!',
			text: `We would love to have @${id} on cool.bio soon!`,
		})
		return response.notFound(template)
	}
	const html = `<ul>book my time</ul>`
	return response.html(html)
}

export default fileList

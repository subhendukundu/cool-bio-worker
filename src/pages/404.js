import * as response from '../lib/responses'
import notFound from '../lib/notfound'

const template = notFound({
	title: 'Cool.bio not found',
})
const notFoundPage = () => response.notFound(template)

export default notFoundPage

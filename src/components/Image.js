export default function Image({ src = '', alt = '', className }) {
	return `<img data-src="${src}" alt="${alt}" loading="lazy" class="${className}" />`
}

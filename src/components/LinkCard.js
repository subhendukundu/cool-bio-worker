import Image from './Image'

function getImage(src, title) {
	if (!src) {
		return ''
	}

	return Image({
		src,
		alt: `${title} link`,
		className: 'card-image',
	})
}

export default function LinkCard({
	href,
	target,
	className = '',
	title = '',
	image,
	buttonType,
	children,
}) {
	return `
        <div class="link-card ${className}">
            <div class="link-title-image">
                ${getImage(image, title)}
                <h2>${title}</h2>
            </div>
            <a href="${href}" target="${target}" aria-label="${title} button" class="button ${buttonType}">${children}</a>
        </div>
    `
}

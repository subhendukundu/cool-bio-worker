export default function Link({
	href,
	target,
	ariaLabel,
	className = '',
	children,
}) {
	return `<a href="${href}" target="${target}" aria-label="${ariaLabel}" class="link ${className}">${children}</a>`
}

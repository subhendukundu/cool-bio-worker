export default function ButtonLink({
	children,
	className = '',
	href = '',
	ariaLabel = '',
}) {
	return `<a class="button ${className}" href=${href} aria-label=${ariaLabel}>${children}</a>`
}

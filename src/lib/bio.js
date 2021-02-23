import template from '../lib/template'
import Link from '../components/Link'
import BrandIcon from '../components/BrandIcon'
import Image from '../components/Image'
import ButtonLink from '../components/ButtonLink'
import LinkCard from '../components/LinkCard'

const style = `
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        min-height: 100vh;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .footer {
        margin-bottom: 1.5rem;
    }

    .title {
        color: rgb(3, 0, 71);
        font-size: 2rem;
        font-weight: normal;
        line-height: 1;
        margin-bottom: 1rem;
        margin-top: 1rem;
        text-align: center;
    }

    .sub-title {
        color: rgb(51, 39, 42);
        font-size: 1.5rem;
        font-weight: normal;
        line-height: 1;
        margin-bottom: 1rem;
        text-align: center;
    }

    .text {
        display: inline-block;
        text-align: left;
        line-height: 49px;
        height: 49px;
        vertical-align: middle;
    }

    .brands {
        font-size: 40px;
        color: rgb(248, 126, 15);
        margin-right: 1rem;
    }

    .links {
        display: flex;
        margin-bottom: 2rem;
    }

    .card-links {
        margin-bottom: 2rem;
        width: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .profile {
        height: 150px;
        width: 150px;
        margin-top: 45px;
        border-radius: 9999px;
        object-fit: contain;
    }

    .button {
        -webkit-box-align: center;
        align-items: center;
        background-color: rgb(248, 126, 15);
        border: 0px;
        border-radius: 10px;
        color: rgb(255, 255, 255);
        display: flex;
        height: 40px;
        -webkit-box-pack: center;
        justify-content: center;
        padding-left: 2rem;
        padding-right: 2rem;
        width: auto;
    }

    .button.outline {
        border: 2px solid rgba(248, 126, 15, 0.5);
        border-radius: 10px;
        box-shadow: rgb(222 222 222 / 25%) 0px 10px 15px;
        color: rgb(248, 126, 15);
        height: 40px;
        background-color: transparent;
    }

    .m-b-0 {
        margin-bottom: 0;
    }

    .m-b-1 {
        margin-bottom: 1rem;
    }

    .m-b-2 {
        margin-bottom: 2rem;
    }

    .link-card {
        -webkit-box-align: center;
        align-items: center;
        background: rgba(248, 126, 15, 0.1);
        border-radius: 10px;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        margin-bottom: 2rem;
        max-width: 800px;
        padding: 1rem;
        width: 90%;
    }

    .link-title-image {
        align-items: center;
        display: flex;
    }

    .card-image {
        width: 60px;
        height: 60px;
    }
    

    @media (max-width: 768px) {
        .title {
            font-size: 3.6rem;
        }

        .sub-title {
            font-size: 1rem;
        }

        .brands {
            font-size: 30px;
        }

        .profile {
            height: 80px;
            width: 80px;
        }

        .footer {
            margin-bottom: 1rem;
        }

        .card-image {
            width: 40px;
            height: 40px;
        }

        .button.outline {
            height: 30px;
        }
    }
`
function dateCheck(from, to) {
	if (!from && !to) {
		return true
	}
	const fromDate = new Date(from)
	const toDate = new Date(to)
	const checkDate = new Date()

	if (checkDate <= toDate && checkDate >= fromDate) {
		return true
	}
	return false
}

const dashed = camel => camel.replace(/[A-Z]/g, m => '-' + m.toLowerCase())

const getLink = (socialLinks, name) =>
	socialLinks.map(({ icon = '', url }) =>
		Link({
			href: url,
			target: '_newtab',
			ariaLabel: `${name}'s ${icon}`,
			children: BrandIcon({ icon: dashed(icon), className: 'brands' }),
		}),
	)

const renderImage = (src, name) =>
	Image({
		src,
		alt: `${name}'s profile`,
		className: 'profile',
	})

const renderTitle = (name = '') => `<h1 class="title">${name}</h1>`

function getAppointments(appointmentsEnabled, userName) {
	if (appointmentsEnabled) {
		return ButtonLink({
			children: 'Book an appointment',
			href: `/${userName}/booking`,
			ariaLabel: `Book an appointment with ${userName}`,
			className: 'm-b-2',
		})
	}
	return ''
}

function getLinks(links) {
	return links.reduce((acc, item) => {
		const {
			buttonType = 'outline',
			url,
			title,
			buttonText = 'Click',
			image,
			startDate,
			endDate,
		} = item
		if (dateCheck(startDate, endDate)) {
			return (
				acc +
				LinkCard({
					href: url,
					target: '_newtab',
					image,
					title,
					children: buttonText,
					buttonType,
				})
			)
		}
		return acc
	}, '')
}

const footer = Image({
	src:
		'https://firebasestorage.googleapis.com/v0/b/coolbio-f04cd.appspot.com/o/assets%2Flogo.svg?alt=media',
	alt: `cool.bio logo`,
})

export default function bio({
	name,
	userName,
	socialLinks = [],
	image: imageSrc = '',
	appointmentsEnabled = true,
	links = [],
}) {
	return template({
		title: `${name} | cool.bio`,
		body: `
            <main class="wrapper">
                <div class="content">
                    ${imageSrc && renderImage(imageSrc, name)}
                    ${name && renderTitle(name)}
                    <h3 class="sub-title">@${userName}</h3>
                    <div class="links">
                        ${getLink(socialLinks, name).join('')}
                    </div>
                    ${getAppointments(appointmentsEnabled, userName)}
                    <div class="card-links">
                        ${getLinks(links)}
                    </div>
                </div>
                <footer class="footer">
                    ${footer}
                </footer>
            </main>
        `,
		style,
		fonts:
			'<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.1.1/css/fontawesome.css" rel="stylesheet"><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.1.1/css/brands.css" rel="stylesheet">',
	})
}

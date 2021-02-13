import template from '../lib/template'

const style = `
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
    }

    .title {
        display: inline-block;
        border-right: 1px solid rgba(0, 0, 0, 0.3);
        margin: 0px 20px 0px 0px;
        padding: 10px 23px 10px 0px;
        font-size: 24px;
        font-weight: 500;
        vertical-align: top;
    }

    .text {
        display: inline-block;
        text-align: left;
        line-height: 49px;
        height: 49px;
        vertical-align: middle;
    }
`

export default function notFound({ title, text }) {
	return template({
		body: `<div class="wrapper"><h1 class="title">${title}</h1><div class="text">${text}</div></div>`,
		style,
	})
}

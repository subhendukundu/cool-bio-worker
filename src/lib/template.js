const app = ({ body, style, fonts = '', links = '' }) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta name="viewport" content="width=device-width"/>
        <meta charSet="utf-8"/>
        <title>cool.bio</title>
        <meta name="robots" content="index,follow"/>
        <meta name="googlebot" content="index,follow"/>
        <meta name="description" content="Be The Awesome Influencer You Are With cool.bio"/>
        <meta property="og:url" content="https://cool.bio"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="cool.bio"/>
        <meta property="og:description" content="Be The Awesome Influencer You Are With cool.bio"/>
        <meta property="og:image" content="https://cool.bio/og.png"/>
        <meta property="og:image:alt" content="cool.bio"/>
        <meta property="og:image:width" content="1280"/>
        <meta property="og:image:height" content="720"/>
        <meta property="og:locale" content="en_IE"/>
        <link rel="canonical" href="https://cool.bio"/>
        <link rel="shortcut icon" type="image/png" href="https://img.cool.bio/v0/b/coolbio-f04cd.appspot.com/o/favicon.ico?alt=media"/>
        <meta name="next-head-count" content="16"/>
        <noscript data-n-css=""></noscript>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css">
        ${links}
        ${fonts}
        <style>
            html,
            body {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            background-color: #ffffff;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            }
            a {
                color: inherit;
                text-decoration: none;
            }
            
            * {
                box-sizing: border-box;
            }
        </style>
        <style>${style}</style>
    </head>
        <body>
            ${body}
            <script>
                if ('loading' in HTMLImageElement.prototype) {
                const images = document.querySelectorAll('img[loading="lazy"]');
                images.forEach(img => {
                    img.src = img.dataset.src;
                });
                } else {
                const script = document.createElement('script');
                script.src =
                    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js';
                document.body.appendChild(script);
                }
            </script>
        </body>
    </html>
`
export default app

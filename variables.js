const title       = 'Simple Shop'
const description = 'Simple Shop'
const keywords    = 'Simple Shop'
const url         = 'https://domain.com/'
const ogImage     = url + 'og_image.jpg'

module.exports = {
	title,
	description,
	keywords,
	url,
	ogImage,
	ym: false,
	gtm: false,
	fav: false,
	og: [
		{ property: 'og:locale', content: 'en_EN' },
		{ property: 'og:type', content: 'website' },
		{ property: 'og:image', content: ogImage },
		{ property: 'og:image:secure_url', content: ogImage },
		{ property: 'og:image:type', content: 'image/jpg' },
		{ property: 'og:image:width', content: '1900' },
		{ property: 'og:image:height', content: '600' },
		{ property: 'og:title', content: title },
		{ property: 'og:description', content: description },
		{ property: 'og:url"', content: url },
		{ property: 'og:site_name', content: title }
	],
	twitter: [
		{ name: 'twitter:card', content: 'summary_large_image' },
		{ name: 'twitter:site', content: url },
		{ name: 'twitter:title', content: title },
		{ name: 'twitter:description', content: description },
		{ name: 'twitter:image', content: ogImage }
	],
	preconnect: [
		'https://polyfill.io/',
		'https://cdnjs.cloudflare.com/'
	],
	script: [
		'//polyfill.io/v3/polyfill.min.js',
		'//cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.2.5/polyfill.min.js'
	]
}
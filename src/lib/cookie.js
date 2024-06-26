const setCookie    = ( name, value, options = {} ) => {
	options = {
		path: '/',
		domain: window.location.hostname,
		samesite: 'strict',
		...options
	}
	if ( options.expires instanceof Date ) {
		options.expires = options.expires.toUTCString()
	}
	let updatedCookie = encodeURIComponent( name ) + '=' + encodeURIComponent( value )
	for ( let optionKey in options ) {
		updatedCookie += '; ' + optionKey
		let optionValue = options[ optionKey ]
		if ( optionValue !== true ) {
			updatedCookie += '=' + optionValue
		}
	}
	document.cookie = updatedCookie
}
const getCookie    = ( name ) => {
	const matches = document.cookie.match( new RegExp(
		'(?:^|; )' + name.replace( /([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1' ) + '=([^;]*)'
	) )
	return matches
	       ? decodeURIComponent( matches[ 1 ] )
	       : undefined
}
const removeCookie = ( name ) => {
	setCookie( name, '', { expires: new Date( 'Thu, 01 Jan 1970 00:00:01 GMT' ) } )
}

export { setCookie, getCookie, removeCookie }
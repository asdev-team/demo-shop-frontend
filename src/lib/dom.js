const getHeightWithMargin = ( el ) => {
	if ( !el ) {
		return 0
	}
	const elStyle = getComputedStyle( el )
	const elMT    = +( elStyle.marginTop.split( 'px' ) )[ 0 ]
	const elMB    = +( elStyle.marginBottom.split( 'px' ) )[ 0 ]
	const elH     = +( elStyle.height.split( 'px' ) )[ 0 ]
	const allH    = elMT + elMB + elH
	return allH
}

const getHeightWithoutContent = ( { h = true, f = true, b = true } ) => {
	const header       = h
	                     ? document.getElementsByTagName( 'header' )[ 0 ]
	                     : null
	const footer       = f
	                     ? document.getElementsByTagName( 'footer' )[ 0 ]
	                     : null
	const breadcrumbs  = b
	                     ? document.getElementsByClassName( 'appContent' )[ 0 ]
	                     : null
	const headerH      = h
	                     ? getHeightWithMargin( header )
	                     : 0
	const footerH      = f
	                     ? getHeightWithMargin( footer )
	                     : 0
	const breadcrumbsH = b
	                     ? getHeightWithMargin( breadcrumbs )
	                     : 0
	return headerH + footerH + breadcrumbsH
}

const setHeightElement = ( el, { h, f, b } ) => {
	const set = () => {
		if ( el ) {
			const height     = getHeightWithoutContent( { h, f, b } )
			el.style.cssText = `--hwc: ${ height }px`
		}
	}
	set()
	
	// We listen to the resize event
	window.addEventListener( 'resize', () => {
		set()
	} )
	
	//height: calc((var(--vh, 1vh) * 100))
}

const isWebpSupported = ( addClass = true ) => {
	const elem = document.createElement( 'canvas' )
	if ( !!( elem.getContext && elem.getContext( '2d' ) ) ) {
		// was able or not to get WebP representation
		if ( addClass ) {
			document.body.classList.add( 'webp' )
		}
		return elem.toDataURL( 'image/webp' ).indexOf( 'data:image/webp' ) == 0
	}
	else {
		// very old browser like IE 8, canvas not supported
		if ( addClass ) {
			document.body.classList.add( 'nowebp' )
		}
		return false
	}
}

export { setHeightElement, getHeightWithMargin, isWebpSupported }
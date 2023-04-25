const fix100vh = () => {
	const getViewportHeight = () => {
		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
		const vh = window.innerHeight * 0.01
		// Then we set the value in the --vh custom property to the root of the document
		document.documentElement.style.setProperty( '--vh', `${ vh }px` )
	}
	getViewportHeight()
	
	// We listen to the resize event
	window.addEventListener( 'resize', () => {
		getViewportHeight()
	} )
	
	//height: calc((var(--vh, 1vh) * 100))
}

const fix100vhHeader = () => {
	const getHeight = () => {
		try {
			const hh = document.getElementsByTagName( 'header' )[ 0 ].clientHeight
			document.documentElement.style.setProperty( '--hh', `${ hh }px` )
		}
		catch ( e ) {
		
		}
	}
	setTimeout( getHeight, 100 )
	
	// We listen to the resize event
	window.addEventListener( 'resize', () => {
		getHeight()
	} )
}
const fix100vhFooter = () => {
	const getHeight = () => {
		try {
			const fh = document.getElementsByTagName( 'footer' )[ 0 ].clientHeight
			document.documentElement.style.setProperty( '--fh', `${ fh }px` )
		}
		catch ( e ) {
		
		}
		
	}
	setTimeout( getHeight, 100 )
	
	// We listen to the resize event
	window.addEventListener( 'resize', () => {
		getHeight()
	} )
}

export { fix100vh, fix100vhFooter, fix100vhHeader }

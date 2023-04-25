import { scrollTo } from 'scroll-js'

const smoothScrollTo = ( elementId, offset = 80 ) => {
	const element = document.getElementById( elementId )
	if ( !element ) {
		return false
	}
	const elementOT = element.offsetTop
	// offset = window.innerWidth > 992 ? -250 : 0
	// if ( elementId === 'main' ){
	// 	offset = 0
	// }
	const top = elementId === 'main'
	            ? 0
	            : elementOT - offset
	
	scrollTo( window, { top: top } ).then( () => {
		//scrolling down 500 pixels has completed!
	} )
}

const quickScrollTop = () => {
	window.scrollTo( { top: 0, behavior: 'auto' }, null )
}

const bodyScrollDisable = () => {
	document.body.style.overflowY = 'hidden'
	document.getElementsByTagName( 'html' ).item( 0 ).classList.add( 'noScroll' )
}

const bodyScrollEnable = () => {
	document.body.style.overflowY = ''
	document.getElementsByTagName( 'html' ).item( 0 ).classList.remove( 'noScroll' )
}

export { smoothScrollTo, quickScrollTop, bodyScrollDisable, bodyScrollEnable }
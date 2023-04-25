import React, { useEffect } from 'react'

/**
 * Hook that alerts clicks outside of the passed ref
 */
const useOutsideClick = ( ref, handler ) => {
	
	const isRefArr = Array.isArray( ref )
	
	useEffect( () => {
		/**
		 * Alert if clicked on outside of element
		 */
		function handleClickOutside( event ) {
			
			if ( !isRefArr ) {
				if ( ref.current && !ref.current.contains( event.target ) ) {
					handler()
				}
			}
			else {
				const clickTarget = []
				ref.map( r => {
					if ( r.current ) {
						clickTarget.push( r.current.contains( event.target ) )
					}
				} )
				
				if ( !clickTarget.includes( true ) ) {
					handler()
				}
			}
		}
		
		// Bind the event listener
		document.addEventListener( 'mousedown', handleClickOutside )
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener( 'mousedown', handleClickOutside )
		}
	}, [ ref ] )
}

export { useOutsideClick }

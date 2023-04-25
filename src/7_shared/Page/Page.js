import React from 'react'

const Page = ( { className, children } ) => {
	const classNames = [ 'page' ]
	if ( className ) {
		classNames.push( className )
	}
	return (
		<div className={ classNames.join( ' ' ) }>
			{ children }
		</div>
	)
}

export default Page
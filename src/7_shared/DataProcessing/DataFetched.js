import React from 'react'

const DataFetched = ( { children, className = '', fetched = false, wrapper = true } ) => {
	if ( !fetched ) {
		return false
	}
	const classNames = [
		'dataProcessing',
		'dataFetched'
	]
	if ( className ) {
		classNames.push( className )
	}
	
	if ( !wrapper ) {
		return <>{ children }</>
	}
	return (
		<div className={ classNames.join( ' ' ) }>
			{ children }
		</div>
	)
}

export { DataFetched }
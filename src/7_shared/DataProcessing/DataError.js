import React from 'react'

const DataError = ( { error = false, errorData, className, wrapper = true } ) => {
	if ( !error ) {
		return false
	}
	
	const classNames = [
		'dataProcessing',
		'dataError'
	]
	if ( className ) {
		classNames.push( className )
	}
	if ( !wrapper ) {
		return <>{ errorData.message[ 'ru' ] }</>
	}
	return <div className={ classNames.join( ' ' ) }>{ errorData.message[ 'ru' ] }</div>
}

export { DataError }
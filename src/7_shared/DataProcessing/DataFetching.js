import React from 'react'
import { Preloader } from '../Preloader'

const DataFetching = ( { fetching = false, className, wrapper = true } ) => {
	if ( !fetching ) {
		return false
	}
	
	const classNames = [
		'dataProcessing',
		'dataFetching'
	]
	if ( className ) {
		classNames.push( className )
	}
	if ( !wrapper ) {
		return <Preloader enable={ fetching }/>
	}
	
	return <div className={ classNames.join( ' ' ) }><Preloader enable={ fetching }/></div>
}

export { DataFetching }
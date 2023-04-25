import React from 'react'
import { useSelector } from 'react-redux'
import { DataError, DataFetching } from '../7_shared/DataProcessing'
import { Startapp } from '../7_shared/Startapp'

const useBasicAuth = ( RenderComponent ) => {
	const auth = useSelector( state => state.auth )
	if ( auth.fetching ) {
		return ( <Startapp><DataFetching fetching={ auth.fetching }/></Startapp> )
	}
	if ( auth.fetched ) {
		return ( <RenderComponent/> )
	}
	if ( auth.error ) {
		return ( <Startapp><DataError error={ auth.error } errorData={ auth.errorData }/></Startapp> )
	}
	return false
}

export { useBasicAuth }
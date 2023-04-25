import React, { useState } from 'react'
import { API } from '../1_app/api'
import { initState } from '../1_app/config/initState'

const useAPI = ( grandType = 'admin' ) => {
	const [ process, setProcess ] = useState( initState )
	return {
		process,
		fetch: ( data ) => {
			setProcess( { ...initState, fetching: true } )
			API( data, grandType ).then( responseData => {
				setProcess( { ...initState, fetched: true, data: responseData } )
			} ).catch( errorData => {
				setProcess( { ...initState, error: true, errorData: errorData } )
			} )
		}
	}
}

export { useAPI }
import React from 'react'
import { useSelector } from 'react-redux'

const useEntities = () => {
	const state = useSelector( state => state )
	
	return {
		get: ( id, type ) => {
			const entities = state[ type ]
			return entities?.data[ type ]?.filter( e => e.id === id )[ 0 ] || ''
		}
	}
}

export { useEntities }
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../1_app/store/state/categories/categories.action'

const useCategories = ( autoFetch = true ) => {
	const categories = useSelector( state => state.categories )
	const dispatch   = useDispatch()
	useEffect( () => {
		if ( autoFetch ) {
			dispatch( getCategories() )
		}
	}, [] )
	return categories
}

export { useCategories }
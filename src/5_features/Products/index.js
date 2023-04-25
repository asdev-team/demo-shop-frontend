import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../1_app/store/state/products/products.action'

const useProducts = ( autoFetch = true ) => {
	const products = useSelector( state => state.products )
	const dispatch = useDispatch()
	useEffect( () => {
		if ( autoFetch ) {
			if ( !products.fetched ) {
				dispatch( getProducts() )
			}
		}
	}, [] )
	return products
}

export { useProducts }
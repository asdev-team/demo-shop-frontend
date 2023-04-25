import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router'
import { getProducts } from '../1_app/store/state/products/products.action'
import { useAPI } from './useAPI'

const useProductsProcess = () => {
	const { process, fetch } = useAPI()
	const history            = useHistory()
	const { pathname }       = useLocation()
	const dispatch           = useDispatch()
	
	const privateHandler = {
		set: ( product ) => {
			const data = {
				method: 'setProduct',
				product
			}
			fetch( data )
		},
		remove: ( id ) => {
			const data = {
				method: 'removeProduct',
				product_id: id
			}
			fetch( data )
		}
	}
	
	return {
		toAdd: () => history.push( pathname + '/add' ),
		toEdit: ( id ) => history.push( pathname + '/edit/e_' + id ),
		get: () => {
			dispatch( getProducts() )
		},
		add: ( data ) => privateHandler.set( data ),
		edit: ( data ) => privateHandler.set( data ),
		remove: ( id ) => privateHandler.remove( id ),
		process
	}
}

export { useProductsProcess }
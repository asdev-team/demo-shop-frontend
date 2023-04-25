import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router'
import { getCategories } from '../1_app/store/state/categories/categories.action'
import { useAPI } from './useAPI'

const useCategoriesProcess = () => {
	const { process, fetch } = useAPI()
	const history            = useHistory()
	const { pathname }       = useLocation()
	const dispatch           = useDispatch()
	
	const privateHandler = {
		set: ( category ) => {
			const data = {
				method: 'setCategories',
				category
			}
			fetch( data )
		},
		remove: ( id ) => {
			const data = {
				method: 'removeCategory',
				category_id: id
			}
			fetch( data )
		}
	}
	
	return {
		toAdd: () => history.push( pathname + '/add' ),
		toEdit: ( id ) => history.push( pathname + '/edit/e_' + id ),
		get: () => {
			dispatch( getCategories() )
		},
		add: ( data ) => privateHandler.set( data ),
		edit: ( data ) => privateHandler.set( data ),
		remove: ( id ) => privateHandler.remove( id ),
		process
	}
}

export { useCategoriesProcess }
import React from 'react'
import { useLocation } from 'react-router'
import { routesAdmin } from '../../1_app/config/routes'
import { useEntities } from '../../2_processes/useEntities'
import { insertAfter } from '../../lib/array'

const useAdminBreadcrumbs = () => {
	const allEntities  = useEntities()
	const { pathname } = useLocation()
	
	const pathNames = pathname.split( '/' ).filter( ( el ) => el )
	
	let breadcrumbsItems = pathNames.map( ( pathname, idx ) => {
		const routeTo = `/${ pathNames.slice( 0, idx + 1 ).join( '/' ) }`
		
		const entities     = +( routeTo.split( 'e_' ) )[ 1 ] || false
		const isEntities   = !!entities
		const entitiesType = isEntities
		                     ? routeTo.split( '/' )[ 2 ]
		                     : false
		
		const isLast = idx === pathNames.length - 1
		
		const currentRoute = routesAdmin.filter( r => r.path === routeTo || r.path === routeTo + '/:id' )[ 0 ]
		let routeTitle     = currentRoute
		                     ? currentRoute.title
		                     : allEntities.get( entities, entitiesType ).title || ''
		
		return { title: routeTitle, path: routeTo, isSeparator: false, isEntities, entities, entitiesType, noLink: false }
	} )
	
	const lastIdx        = breadcrumbsItems.length - 1
	const lastIsEntities = breadcrumbsItems[ lastIdx ].isEntities
	if ( lastIsEntities ) {
		breadcrumbsItems[ lastIdx - 1 ].noLink = true
	}
	
	breadcrumbsItems = insertAfter( breadcrumbsItems, { title: '/', isSeparator: true }, 1 )
	breadcrumbsItems.pop()
	
	return breadcrumbsItems
}

export { useAdminBreadcrumbs }

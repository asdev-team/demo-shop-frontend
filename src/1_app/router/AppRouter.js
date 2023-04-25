import React, { Suspense, useLayoutEffect } from 'react'
import { Route, Switch, useHistory, useLocation } from 'react-router-dom'
import { Preloader } from '../../7_shared/Preloader'
import { createAllowRoutes } from '../../lib/router'

const CreateRoutes = ( { routes } ) => {
	return routes.map( ( route ) => {
		if ( !route.Component ) {
			return false
		}
		const RenderComponent = ( props ) => {
			const { Component } = route
			return <Component { ...props } route={ route }/>
		}
		return (
			<Route key={ route.id } exact={ true } path={ route.path }>
				<RenderComponent/>
			</Route>
		)
	} )
}

export const AppRouters = ( { routes } ) => {
	const allowRoute = createAllowRoutes( routes )
	const navigate   = useHistory()
	const location   = useLocation()
	const handle     = {
		changePath: () => {
			const pathChunk  = location.pathname.split( '/' )
			const regExp     = new RegExp( /[e_]+\d+$/ )
			const isEntities = regExp.test( pathChunk[ pathChunk.length - 1 ] )
			if ( isEntities ) {
				pathChunk.pop()
				pathChunk.push( ':id' )
			}
			
			const pathname = pathChunk.join( '/' )
			if ( ( !allowRoute.includes( pathname ) ) && location.pathname !== '/404' ) {
				console.log( 'Путь не является допустимым' )
				navigate.push( {
					pathname: '/404',
					search: location.search
				} )
			}
		}
	}
	
	useLayoutEffect( handle.changePath, [ location.pathname ] )
	
	return (
		<Suspense fallback={ <Preloader fullScreen={ true }/> }>
			<Switch>
				<CreateRoutes routes={ routes }/>
			</Switch>
		</Suspense>
	)
}

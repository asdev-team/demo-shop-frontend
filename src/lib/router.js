const createAllowRoutes = ( routes ) => {
	let allowRoute = []
	
	routes.map( ( route ) => {
		allowRoute.push( route.path )
		const subRoutes = route.routes
		
		if ( subRoutes ) {
			const allowSubRoutes = createAllowRoutes( subRoutes )
			allowRoute           = allowRoute.concat( allowSubRoutes )
		}
	} )
	
	return allowRoute
}

export { createAllowRoutes }
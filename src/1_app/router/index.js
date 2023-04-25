import React from 'react'

import { BrowserRouter, HashRouter } from 'react-router-dom'
import { useBasicAuth } from '../../2_processes/useBasicAuth'
import { routes, routesAdmin } from '../config/routes'
import { AppRouters } from './AppRouter'

const RouterA = process.env.NODE_ENV === 'production'
                ? BrowserRouter
                : HashRouter

const BasicIsAuth = () => {
	return (
		<RouterA>
			<AppRouters routes={ [
				...routes,
				...routesAdmin
			] }/>
		</RouterA>
	)
}

const Router = () => {
	return useBasicAuth( BasicIsAuth )
}

export { Router }
import React, { useLayoutEffect } from 'react'
import { Main } from '../7_shared/Main'
import disableReactDevTools from '../lib/react'
import { fix100vh } from '../lib/vh'

import { Router } from './router'
import { StoreProvider } from './store'

if ( process.env.NODE_ENV === 'production' ) {
	disableReactDevTools()
}
const App = () => {
	useLayoutEffect( fix100vh, [] )
	return (
		<Main>
			<StoreProvider>
				<Router/>
			</StoreProvider>
		</Main>
	)
}

export { App }

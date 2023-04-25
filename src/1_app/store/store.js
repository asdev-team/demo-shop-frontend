import { applyMiddleware, compose, createStore } from 'redux'
import promise from 'redux-promise-middleware'

// import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { init, rootReducers } from './state/root'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore( rootReducers, /* preloadedState, */ composeEnhancers(
	applyMiddleware( promise, thunk /*logger*/ )
) )

store.dispatch( init() )

export { store }



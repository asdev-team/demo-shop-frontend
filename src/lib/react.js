const isFunction = ( obj ) => {
	return typeof obj == 'function' || false
}

const isObject = ( obj ) => {
	var type = typeof obj
	return type === 'function' || ( type === 'object' && !!obj )
}

const disableReactDevTools = () => {
	const exts = [
		'__REDUX_DEVTOOLS_EXTENSION__',
		'__REDUX_DEVTOOLS_EXTENSION_COMPOSE__',
		'__REACT_DEVTOOLS_GLOBAL_HOOK__',
		'__REACT_DEVTOOLS_COMPONENT_FILTERS__'
	]
	
	exts.map( ( ext ) => {
		// Ensure the React Developer Tools global hook exists
		if ( !isObject( window[ ext ] ) ) {
			return
		}
		
		// Replace all global hook properties with a no-op function or a null value
		for ( const prop in window[ ext ] ) {
			
			window[ ext ][ prop ] = isFunction( window[ ext ][ prop ] )
			                        ? Function.prototype
			                        : null
		}
		
	} )
	
	// // Ensure the React Developer Tools global hook exists
	// if (!isObject(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)) {
	//     return;
	// }
	//
	// // Replace all global hook properties with a no-op function or a null value
	// for (const prop in window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
	//
	//     window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] = isFunction(
	//         window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop]
	//     )
	//         ? Function.prototype
	//         : null;
	// }
}

export default disableReactDevTools
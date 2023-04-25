const setStorage = ( key, value ) => {
	localStorage.setItem( key, JSON.stringify( value ) )
}

const getStorage = ( key ) => {
	return JSON.parse( localStorage.getItem( key ) || 'false' )
}

const clearStorage = () => {
	localStorage.clear()
}

export { setStorage, getStorage, clearStorage }
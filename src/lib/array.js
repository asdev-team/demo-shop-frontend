export const insertAfter = ( arr, str, n ) => {
	return arr.reduce( ( arr, item, i ) => {
		arr.push( item )
		if ( i % n == n - 1 ) {
			arr.push( str )
		}
		return arr
	}, [] )
}
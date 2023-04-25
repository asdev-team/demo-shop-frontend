export const PENDING   = ( place ) => ( {
	type: place + '_PENDING'
} )
export const FULFILLED = ( place, data = {} ) => ( {
	type: place + '_FULFILLED',
	payload: data
} )
export const REJECTED  = ( place, data = {} ) => ( {
	type: place + '_REJECTED',
	payload: data
} )
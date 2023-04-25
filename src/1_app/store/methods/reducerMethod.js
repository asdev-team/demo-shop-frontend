export const pendingData   = ( state, action ) => {
	return {
		...state,
		fetching: true,
		fetched: false,
		data: {},
		error: false,
		errorData: {}
	}
}
export const rejectedData  = ( state, action ) => {
	return {
		...state,
		fetching: false,
		fetched: false,
		data: {},
		error: true,
		errorData: action.payload
	}
}
export const fulfilledData = ( state, action ) => {
	return {
		...state,
		fetching: false,
		fetched: true,
		data: action.payload,
		error: false,
		errorData: {}
	}
}
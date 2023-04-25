import { initState } from '../../../config/initState'
import { fulfilledData, pendingData, rejectedData } from '../../methods/reducerMethod'

export const reducerAdmin = ( state = initState, action ) => {
	switch ( action.type ) {
		case 'ADMIN_PENDING': {
			return pendingData( state, action )
		}
		case 'ADMIN_REJECTED': {
			return rejectedData( state, action )
		}
		case 'ADMIN_FULFILLED': {
			return fulfilledData( state, action )
		}
		case 'ADMIN_RESET': {
			return initState
		}
		default:
			return state
	}
}
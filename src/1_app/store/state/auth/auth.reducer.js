import { initState } from '../../../config/initState'
import { fulfilledData, pendingData, rejectedData } from '../../methods/reducerMethod'

export const reducerAuth = ( state = initState, action ) => {
	switch ( action.type ) {
		case 'AUTH_PENDING': {
			return pendingData( state, action )
		}
		case 'AUTH_REJECTED': {
			return rejectedData( state, action )
		}
		case 'AUTH_FULFILLED': {
			return fulfilledData( state, action )
		}
		default:
			return state
	}
}
import { initState } from '../../../config/initState'
import { fulfilledData, pendingData, rejectedData } from '../../methods/reducerMethod'

export const reducerProducts = ( state = initState, action ) => {
	switch ( action.type ) {
		case 'PROD_PENDING': {
			return pendingData( state, action )
		}
		case 'PROD_REJECTED': {
			return rejectedData( state, action )
		}
		case 'PROD_FULFILLED': {
			return fulfilledData( state, action )
		}
		default:
			return state
	}
}
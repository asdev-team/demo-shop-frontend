import { initState } from '../../../config/initState'
import { fulfilledData, pendingData, rejectedData } from '../../methods/reducerMethod'

export const reducerCategories = ( state = initState, action ) => {
	switch ( action.type ) {
		case 'CAT_PENDING': {
			return pendingData( state, action )
		}
		case 'CAT_REJECTED': {
			return rejectedData( state, action )
		}
		case 'CAT_FULFILLED': {
			return fulfilledData( state, action )
		}
		default:
			return state
	}
}
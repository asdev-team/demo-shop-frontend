import { initState } from '../../../config/initState'
import { fulfilledData, pendingData, rejectedData } from '../../methods/reducerMethod'

export const reducerFaqs = ( state = initState, action ) => {
	switch ( action.type ) {
		case 'FAQ_PENDING': {
			return pendingData( state, action )
		}
		case 'FAQ_REJECTED': {
			return rejectedData( state, action )
		}
		case 'FAQ_FULFILLED': {
			return fulfilledData( state, action )
		}
		default:
			return state
	}
}
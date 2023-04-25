import { bodyScrollDisable, bodyScrollEnable } from '../../../../lib/scroll'

const modalsInitState = {
	generalInfo: {
		open: false,
		id: 'generalInfo',
		data: {}
	}
}

export const reducerModals = ( state = modalsInitState, action ) => {
	switch ( action.type ) {
		case 'MODAL_OPEN': {
			let otherOpen = false
			Object.keys( state ).map( modelId => {
				if ( state[ modelId ].open && modelId != action.payload.id ) {
					otherOpen = true
				}
			} )
			if ( !otherOpen ) {
				bodyScrollDisable()
			}
			
			state[ action.payload.id ].open = true
			state[ action.payload.id ].data = action.payload.hasOwnProperty( 'data' )
			                                  ? action.payload.data
			                                  : {}
			return {
				...state
			}
		}
		case 'MODAL_CLOSE': {
			let otherOpen = false
			Object.keys( state ).map( modelId => {
				if ( state[ modelId ].open && modelId !== action.payload.id ) {
					otherOpen = true
				}
			} )
			
			if ( !otherOpen ) {
				bodyScrollEnable()
			}
			else {
				bodyScrollDisable()
			}
			
			state[ action.payload.id ].open = false
			state[ action.payload.id ].data = {}
			return {
				...state
			}
		}
		case 'MODAL_CLOSE_ALL': {
			bodyScrollEnable()
			Object.keys( state ).map( modelId => {
				state[ modelId ].open = false
				state[ modelId ].data = {}
			} )
			return {
				...state
			}
		}
		default:
			return state
	}
}
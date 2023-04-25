// export interface ModalObject {
//     open?: boolean,
//     id: string,
//     data?: {
//         title?: string,
//         message?: string | object,
//         handler?: () => void,
//         handlerOK?: () => void,
//         handlerCancel?: () => void,
//         onReady?: () => void,
//         dataset?: any,
//         buttonTitle?: string
//     }
// }

import { logger } from '../../../../lib/logger'

export function modalOpen( modal ) {
	logger( '[Modals Actions] Open modal ' + modal.id )
	return {
		type: 'MODAL_OPEN', payload: modal
	}
}

export function modalCloseStep1( id ) {
	// logger( '[Modals Actions] Close modal ' + id + ' step 1' )
	return dispatch => {
		const wrapper = document.getElementById( id )
		wrapper.classList.add( 'close' )
	}
}

export function modalCloseStep2( modalName ) {
	// logger( '[Modals Actions] Close modal ' + modalName.id + ' step 2' )
	return {
		type: 'MODAL_CLOSE', payload: modalName
	}
}

export function modalCloseStep3( modalName ) {
	logger( '[Modals Actions] Close modal ' + modalName.id )
	return {
		type: 'MODAL_CLOSE_FINISH'
	}
}

export function modalClose( modalName ) {
	// logger('[Modals Actions] Close modal ' + modalName.id + ' start')
	const timeOutClose = 300
	return dispatch => {
		dispatch( modalCloseStep1( modalName.id ) )
		setTimeout( () => {
			dispatch( modalCloseStep2( modalName ) )
			dispatch( modalCloseStep3( modalName ) )
		}, timeOutClose )
	}
}

export function modalCloseAll() {
	logger( '[Modals Actions] Close modal all' )
	return {
		type: 'MODAL_CLOSE_ALL'
	}
}
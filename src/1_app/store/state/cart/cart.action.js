import { logger } from '../../../../lib/logger'

export function cartOpen() {
	logger( '[Cart Actions] Open' )
	return {
		type: 'CART_OPEN'
	}
}

export function cartSwitch() {
	logger( '[Cart Actions] Switch' )
	return {
		type: 'CART_SWITCH'
	}
}

export function cartClose() {
	logger( '[Cart Actions] Close' )
	return {
		type: 'CART_CLOSE'
	}
}

export function cartAdd( id ) {
	logger( '[Cart Actions] Add' )
	return {
		type: 'CART_ADD',
		payload: id
	}
}

export function cartRemove( id ) {
	logger( '[Cart Actions] Remove' )
	return {
		type: 'CART_REMOVE',
		payload: id
	}
}
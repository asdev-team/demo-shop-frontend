import { bodyScrollDisable, bodyScrollEnable } from '../../../../lib/scroll'
import { getStorage, setStorage } from '../../../../lib/storage'

const initCart = {
	open: false,
	status: 'init',
	products: getStorage( 'cart' ) || []
}

export const reducerCart = ( state = initCart, action ) => {
	switch ( action.type ) {
		case 'CART_OPEN': {
			setTimeout( () => {
				bodyScrollDisable()
			}, 100 )
			return {
				...state,
				open: true,
				status: 'open'
			}
		}
		case 'CART_CLOSE': {
			setTimeout( () => {
				bodyScrollEnable()
			}, 100 )
			return {
				...state,
				open: false,
				status: 'close'
			}
		}
		case 'CART_SWITCH': {
			setTimeout( () => {
				state.open
				? bodyScrollEnable()
				: bodyScrollDisable()
			}, 100 )
			return {
				...state,
				open: !state.open,
				status: state.open
				        ? 'close'
				        : 'open'
			}
		}
		case 'CART_ADD': {
			const newProduct = [
				...state.products,
				{ id: action.payload }
			]
			setStorage( 'cart', newProduct )
			return {
				...state,
				products: newProduct
			}
		}
		case 'CART_REMOVE': {
			const newProduct = state.products.filter( product => product.id !== action.payload )
			setStorage( 'cart', newProduct )
			return {
				...state,
				products: newProduct
			}
		}
		default:
			return state
	}
}
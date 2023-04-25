import { combineReducers } from 'redux'
import { reducerAdmin } from '../admin/admin.reducer'
import { reducerAuth } from '../auth/auth.reducer'
import { reducerCart } from '../cart/cart.reducer'
import { reducerCategories } from '../categories/categories.reducer'
import { reducerFaqs } from '../faqs/faqs.reducer'
import { reducerModals } from '../modals/modals.reducer'
import { reducerProducts } from '../products/products.reducer'

const appReducers = combineReducers( {
	auth: reducerAuth,
	admin: reducerAdmin,
	categories: reducerCategories,
	products: reducerProducts,
	modals: reducerModals,
	faqs: reducerFaqs,
	cart: reducerCart
} )

export const rootReducers = ( state, action ) => {
	if ( action.type === 'RESET_STORE' ) {
		state = {}
	}
	return appReducers( state, action )
}
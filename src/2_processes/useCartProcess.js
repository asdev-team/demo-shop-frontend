import React from 'react'
import { useDispatch } from 'react-redux'
import { cartAdd, cartRemove } from '../1_app/store/state/cart/cart.action'
import { useCart } from '../5_features/Cart'

const useCartProcess = () => {
	const { cartProducts } = useCart( { justState: true } )
	const dispatch         = useDispatch()
	
	return {
		removeProduct: ( id ) => {
			//TODO Сделать тостер на удаление товара из корзины
			dispatch( cartRemove( id ) )
		},
		addProduct: ( id ) => {
			//TODO Сделать тостер на добавление товара в корзину
			dispatch( cartAdd( id ) )
		},
		checkProduct: ( id ) => {
			return cartProducts.some( product => product.id === id )
		},
		checkout: () => {
		
		}
	}
}

export { useCartProcess }
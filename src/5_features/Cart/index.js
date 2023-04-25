import React, { useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartClose, cartSwitch } from '../../1_app/store/state/cart/cart.action'
import { useOutsideClick } from '../../2_processes/useOutsideClick'
import { CartHeaderButton, CartHeaderQuantity } from '../../7_shared/Cart'
import { IconBasket } from '../../7_shared/Icons'

const defaultProps = { sidebarRef: null, justState: false }
const useCart      = ( options = { ...defaultProps } ) => {
	const cart = useSelector( state => state.cart )
	if ( options.justState ) {
		return { cartProducts: cart.products }
	}
	
	const buttonRef  = useRef( null )
	const sidebarRef = options.sidebarRef
	
	const refs = [ buttonRef ]
	if ( sidebarRef ) {
		refs.push( sidebarRef )
	}
	
	const dispatch = useDispatch()
	
	const handler = {
		switch: () => {
			dispatch( cartSwitch() )
		},
		close: () => {
			if ( cart.open ) {
				dispatch( cartClose() )
			}
		}
	}
	
	useOutsideClick( refs, handler.close )
	
	const CartButton = useMemo( () => {
		return (
			<CartHeaderButton ref={ buttonRef } onClick={ handler.switch }>
				<IconBasket/>
				<CartHeaderQuantity quantity={ cart.products.length }/>
			</CartHeaderButton>
		)
	}, [ cart.products.length ] )
	
	return {
		cartProducts: cart.products,
		cartSate: cart.open,
		cartClose: handler.close,
		cartSwitch: handler.switch,
		CartButton: CartButton
	}
}

export { useCart }
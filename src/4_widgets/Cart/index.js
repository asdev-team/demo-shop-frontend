import React, { useRef } from 'react'
import { useCart } from '../../5_features/Cart'
import { CartSidebar } from './CartSidebar'

const Cart = () => {
	const sidebarRef                                        = useRef( null )
	const { CartButton, cartSate, cartClose, cartProducts } = useCart( { sidebarRef } )
	return (
		<>
			{ CartButton }
			<CartSidebar ref={ sidebarRef } cartState={ cartSate } onClose={ cartClose } cartProducts={ cartProducts }/>
		</>
	)
}

export { Cart }
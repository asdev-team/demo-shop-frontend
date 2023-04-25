import React from 'react'
import { IconClose } from '../../Icons'

const CartSidebarHeading = ( { title, onClose } ) => {
	return (
		<div className="cartSidebarHeading">
			<span className="cartSidebarTitle">{ title }</span>
			<button className="cartSidebarButtonClose" onClick={ onClose }>
				<IconClose/>
			</button>
		</div>
	)
}

export default CartSidebarHeading
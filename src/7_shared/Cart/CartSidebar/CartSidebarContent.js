import React, { forwardRef } from 'react'

const CartSidebarContent = forwardRef( ( { children, cartState }, ref ) => {
	return (
		<div className="cartSidebar" ref={ ref } data-open={ cartState }>
			<div className="cartSidebarBody">
				<div className="cartSidebarContent">
					{ children }
				</div>
			</div>
		</div>
	)
} )

export default CartSidebarContent
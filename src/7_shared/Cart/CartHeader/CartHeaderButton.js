import React, { forwardRef } from 'react'

const CartHeaderButton = forwardRef( ( { children, onClick }, ref ) => {
	return (
		<button ref={ ref } className="cartHeaderButton" onClick={ onClick }>{ children }</button>
	)
} )

export default CartHeaderButton
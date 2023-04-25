import React from 'react'

const CartHeaderQuantity = ( { quantity = 0 } ) => {
	return <span className="cartHeaderQuantity">{ quantity }</span>
}

export default CartHeaderQuantity
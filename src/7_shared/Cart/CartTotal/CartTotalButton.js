import React from 'react'
import { Button } from '../../Button'

const CartTotalButton = ( { onCheckout } ) => {
	return (
		<Button
			type="button"
			className="cartTotalButton primary"
			onClick={ onCheckout }
		>
			Оформить заказ
		</Button>
	)
}

export default CartTotalButton
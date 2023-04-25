import React from 'react'
import { CartTotalButton, CartTotalPrice, CartTotalPriceLabel, CartTotalPriceLine, CartTotalPriceNumber, CartTotalWrapper } from '../../7_shared/Cart'

const CartTotal = ( { price, onCheckout } ) => {
	return (
		<CartTotalWrapper>
			<CartTotalPrice>
				<CartTotalPriceLabel label="Итого"/>
				<CartTotalPriceLine/>
				<CartTotalPriceNumber price={ price }/>
			</CartTotalPrice>
			<CartTotalButton onCheckout={ onCheckout }/>
		</CartTotalWrapper>
	)
}

export default CartTotal
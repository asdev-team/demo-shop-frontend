import React from 'react'
import { toDigit } from '../../../lib/price'

const CartTotalPriceNumber = ( { price = 0 } ) => {
	return <span className="cartTotalPriceNumber">{ toDigit( price ) } ₽</span>
}

export default CartTotalPriceNumber
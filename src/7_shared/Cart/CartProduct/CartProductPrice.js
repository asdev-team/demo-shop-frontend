import React from 'react'
import { toDigit } from '../../../lib/price'

const CartProductPrice = ( { price = 0 } ) => {
	return <span className="cartProductPrice">{ toDigit( price ) } ₽</span>
}

export default CartProductPrice
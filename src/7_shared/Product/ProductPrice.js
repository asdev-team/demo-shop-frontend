import React from 'react'
import { toDigit } from '../../lib/price'

const ProductPrice = ( {
	prices = {
		price: 0,
		discount_price: 0
	}
} ) => {
	return (
		<div className="productPrice">
			<span className="productPriceCurrent">{ toDigit( prices.price ) } ₽</span>
			{ !!prices.discount_price &&
			<span className="productPriceDiscount">{ toDigit( prices.discount_price ) } ₽</span>
			}
		</div>
	)
}

export default ProductPrice
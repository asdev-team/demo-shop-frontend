import React from 'react'
import { CartProductInfo } from '../../7_shared/Cart'
import { CartProductImage, CartProductItem, CartProductPrice, CartProductRemove, CartProductTitle } from '../../7_shared/Cart/CartProduct'
import { getProductImg } from '../../lib/image'

const CartProduct = ( { product, onRemove } ) => {
	const allImages = getProductImg( product.images )
	
	const image = {
		src: allImages.main,
		alt: product.title
	}
	
	return (
		<CartProductItem>
			<CartProductImage image={ image }/>
			<CartProductInfo>
				<CartProductTitle>{ product.title }</CartProductTitle>
				<CartProductPrice price={ product.price }/>
			</CartProductInfo>
			<CartProductRemove onRemove={ onRemove }/>
		</CartProductItem>
	)
}

export default CartProduct
import React from 'react'
import { useCartProcess } from '../../2_processes/useCartProcess'
import { ProductBuy, ProductImage, ProductPrice, ProductTitle } from '../../7_shared/Product'
import { ProductCard, ProductCardBody, ProductCardHead } from '../../7_shared/ProductCard'
import { getProductImg } from '../../lib/image'

const Product = ( { product } ) => {
	const { checkProduct, addProduct } = useCartProcess()
	const isProductAtCart              = checkProduct( product.id )
	
	const allImages = getProductImg( product.images )
	const image     = {
		src: allImages.main,
		alt: product.title
	}
	const prices    = {
		price: product.price,
		discount_price: product.discount_price
	}
	
	const buyTitle = !isProductAtCart
	                 ? 'Добавить в корзину'
	                 : 'В корзине'
	
	return (
		<ProductCard>
			<ProductCardHead>
				<ProductImage image={ image }/>
			</ProductCardHead>
			<ProductCardBody>
				<ProductPrice prices={ prices }/>
				<ProductTitle>{ product.title }</ProductTitle>
				<ProductBuy title={ buyTitle } handler={ () => addProduct( product.id ) } disabled={ isProductAtCart }/>
			</ProductCardBody>
		</ProductCard>
	)
}

export { Product }
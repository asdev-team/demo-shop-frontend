import React from 'react'
import { Product } from '../../6_entities/Product'
import { ProductCardGroup } from '../../7_shared/ProductCard'

const Products = ( { items, categorySelected } ) => {
	
	const productsWithCategory = categorySelected === 0
	                             ? items
	                             : items.filter( cat => cat.category_id === categorySelected )
	
	return (
		<ProductCardGroup>
			{ productsWithCategory.map( product => {
				return <Product key={ product.id } product={ product }/>
			} ) }
		</ProductCardGroup>
	)
}

export { Products }
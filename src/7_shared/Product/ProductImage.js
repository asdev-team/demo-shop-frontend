import React from 'react'
import { IconNoImg } from '../Icons'

const ProductImage = ( { image } ) => {
	if ( !image.src ) {
		return (
			<div className="productImage"><IconNoImg/></div>
		)
	}
	return <img className="productImage" src={ image.src } alt={ image.alt }/>
}

export default ProductImage
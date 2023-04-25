import React from 'react'
import { IconNoImg } from '../../Icons'

const CartProductImage = ( { image } ) => {
	if ( !image.src ) {
		return (
			<div className="cartProductImg"><IconNoImg/></div>
		)
	}
	return <img className="cartProductImg" src={ image.src } alt={ image.alt }/>
}

export default CartProductImage
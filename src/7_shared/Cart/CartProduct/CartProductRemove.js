import React from 'react'
import { IconRemove } from '../../Icons'

const CartProductRemove = ( { onRemove } ) => {
	return (
		<button className="cartProductRemove" type="button" onClick={ onRemove }>
			<IconRemove/>
		</button>
	)
}

export default CartProductRemove
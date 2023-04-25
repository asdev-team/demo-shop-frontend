import React from 'react'
import { Button } from '../Button'

const ProductBuy = ( { handler, title, disabled } ) => {
	return <Button className="productBuy primary" disabled={ disabled } onClick={ handler }>{ title }</Button>
}
export default ProductBuy
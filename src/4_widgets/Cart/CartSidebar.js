import React, { forwardRef } from 'react'
import { useCartProcess } from '../../2_processes/useCartProcess'
import { useProducts } from '../../5_features/Products'
import { CartProduct, CartTotal } from '../../6_entities/Cart'
import { CartProductsList, CartSidebarContent, CartSidebarEmpty, CartSidebarHeading } from '../../7_shared/Cart'
import { DataError, DataFetched, DataFetching } from '../../7_shared/DataProcessing'

const CartSidebar = forwardRef( ( { cartState, cartProducts, onClose }, ref ) => {
	const { removeProduct, checkout } = useCartProcess()
	
	const { data: productsData, fetched, fetching, errorData, error } = useProducts()
	
	const products = fetched
	                 ? productsData?.products || []
	                 : []
	
	const productsInCart = products.filter( product => cartProducts.some( cartItem => cartItem.id === product.id ) )
	const totalPrice     = productsInCart.reduce( ( total, product ) => total + product.price, 0 )
	const cartIsEmpty    = !productsInCart.length
	
	return (
		<CartSidebarContent ref={ ref } cartState={ cartState }>
			<CartSidebarHeading title="Корзина" onClose={ onClose }/>
			<DataFetching fetching={ fetching } wrapper={ false }/>
			<DataFetched fetched={ fetched } wrapper={ false }>
				{ !cartIsEmpty && <>
					<CartProductsList>
						{ productsInCart.map( product =>
							<CartProduct key={ product.id } product={ product } onRemove={ () => removeProduct( product.id ) }/> ) }
					</CartProductsList>
					<CartTotal price={ totalPrice } onCheckout={ checkout }/>
				</> }
				{ cartIsEmpty && <CartSidebarEmpty/> }
			</DataFetched>
			<DataError error={ error } errorData={ errorData }/>
		</CartSidebarContent>
	)
} )

export { CartSidebar }
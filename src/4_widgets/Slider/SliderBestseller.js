import React from 'react'
import { useCartProcess } from '../../2_processes/useCartProcess'
import { useSlider } from '../../5_features/Slider'
import { SlideBestseller, SliderWrapper } from '../../6_entities/Slide'
import { DataError, DataFetched, DataFetching } from '../../7_shared/DataProcessing'
import { Section } from '../../7_shared/Section'

const SliderBestseller = () => {
	const state                        = useSlider()
	const { checkProduct, addProduct } = useCartProcess()
	
	const Slides = state.data.map( product => {
		const isProductAtCart = checkProduct( product.id )
		const buyTitle        = !isProductAtCart
		                        ? 'Купить'
		                        : 'В корзине'
		return <SlideBestseller
			key={ product.id }
			title={ product.title }
			imageSrc={ product.imageSrc }
			handler={ () => addProduct( product.id ) }
			handlerTitle={ buyTitle }
			disabled={ isProductAtCart }
		/>
	} )
	return (
		<Section title="Бестселлеры">
			<DataFetching fetching={ state.fetching }/>
			<DataFetched fetched={ state.fetched }>
				<SliderWrapper Slides={ Slides }/>
			</DataFetched>
			<DataError error={ state.error } errorData={ state.errorData }/>
		</Section>
	)
}

export default SliderBestseller
import React, { useState } from 'react'
import { useCategories } from '../../5_features/Categories'
import { useProducts } from '../../5_features/Products'
import { DataError, DataFetched, DataFetching } from '../../7_shared/DataProcessing'
import { Section } from '../../7_shared/Section'
import { Categories } from './Categories'
import { Products } from './Products'

const Catalog = () => {
	const stateCategories = useCategories()
	const stateProducts   = useProducts()
	
	const categories = stateCategories.data?.categories || []
	const products   = stateProducts.data?.products || []
	
	const processing = {
		fetching: stateCategories.fetching || stateProducts.fetching,
		fetched: stateCategories.fetched && stateProducts.fetched,
		error: stateCategories.error || stateProducts.error,
		errorData: stateCategories.errorData || stateProducts.errorData
	}
	
	const [ selected, setSelected ] = useState( 0 )
	
	const onSelectCat = ( id ) => {
		if ( id === selected ) {
			return false
		}
		
		setSelected( id )
	}
	
	return (
		<Section title="Категории товаров">
			<DataFetching fetching={ processing.fetching }/>
			<DataFetched fetched={ processing.fetched }>
				<Categories items={ categories } selected={ selected } onSelect={ onSelectCat }/>
				<Products items={ products } categorySelected={ selected }/>
			</DataFetched>
			<DataError error={ processing.error } errorData={ processing.errorData }/>
		</Section>
	)
}

export { Catalog }

import React from 'react'
import { useProducts } from '../../5_features/Products'
import { DataError, DataFetched, DataFetching } from '../../7_shared/DataProcessing'
import { Section } from '../../7_shared/Section'
import { Products } from '../Catalog/Products'

const Purchase = () => {
	const stateProducts = useProducts()
	const products      = stateProducts.data?.products || []
	
	const processing = {
		fetching: stateProducts.fetching,
		fetched: stateProducts.fetched,
		error: stateProducts.error,
		errorData: stateProducts.errorData
	}
	
	return (
		<Section title="Последние покупки">
			<DataFetching fetching={ processing.fetching }/>
			<DataFetched fetched={ processing.fetched }>
				<Products items={ products } categorySelected={ 0 }/>
			</DataFetched>
			<DataError error={ processing.error } errorData={ processing.errorData }/>
		</Section>
	)
}

export { Purchase }
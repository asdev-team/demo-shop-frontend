import React, { useState } from 'react'
import { useFAQs } from '../../5_features/FAQs'
import { FAQ } from '../../6_entities/FAQ'
import { DataError, DataFetched, DataFetching } from '../../7_shared/DataProcessing'
import { FAQsContainer } from '../../7_shared/FAQ'
import { Section } from '../../7_shared/Section'

const FAQs = () => {
	const state                       = useFAQs()
	const [ faqActive, setFaqActive ] = useState()
	const onOpen                      = ( faqId ) => {
		setFaqActive( prev => {
			return faqId === prev
			       ? false
			       : faqId
		} )
	}
	
	const data = state.data?.faqs || []
	
	return (
		<Section title="Часто задаваемые вопросы">
			<DataFetching fetching={ state.fetching }/>
			<DataFetched fetched={ state.fetched }>
				<FAQsContainer>
					{ data.map( faq => {
						return <FAQ key={ faq.id } faq={ faq } isActive={ faqActive === faq.id } onOpen={ () => onOpen( faq.id ) }/>
					} ) }
				</FAQsContainer>
			</DataFetched>
			<DataError error={ state.error } errorData={ state.errorData }/>
		</Section>
	)
}

export { FAQs }
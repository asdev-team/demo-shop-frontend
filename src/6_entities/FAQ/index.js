import React from 'react'
import { FAQContent, FAQTitle, FAQWrapper } from '../../7_shared/FAQ'

const FAQ = ( { faq, isActive, onOpen } ) => {
	return (
		<FAQWrapper key={ faq.id } open={ isActive }>
			<FAQTitle handler={ onOpen }>{ faq.title }</FAQTitle>
			<FAQContent text={ faq.text }/>
		</FAQWrapper>
	)
}

export { FAQ }
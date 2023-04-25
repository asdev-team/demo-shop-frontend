import React from 'react'

const FAQContent = ( { text } ) => {
	return (
		<div className="faqContent" dangerouslySetInnerHTML={ { __html: text } }/>
	)
}

export default FAQContent
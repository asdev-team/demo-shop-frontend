import React from 'react'

const FAQWrapper = ( { children, open } ) => {
	return (
		<li className="faqItem" data-open={ open }>
			{ children }
		</li>
	)
}

export default FAQWrapper
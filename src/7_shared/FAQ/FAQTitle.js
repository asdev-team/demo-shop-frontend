import React from 'react'
import { IconArrow } from '../Icons'

const FAQTitle = ( { children, handler } ) => {
	return (
		<div className="faqTitle" onClick={ handler }>
			<button className="faqTitleIcon"><IconArrow/></button>
			{ children }
		</div>
	)
}

export default FAQTitle
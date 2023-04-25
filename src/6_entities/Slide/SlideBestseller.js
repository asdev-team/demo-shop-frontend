import React from 'react'
import { SlideAction, SlideContent, SlideImage, SlideTitle } from '../../7_shared/Slider'

const SlideBestseller = ( {
	title = '', imageSrc = '', handler = () => {
	}, handlerTitle = '', disabled = false
} ) => {
	return (
		<>
			<SlideContent>
				<SlideTitle>{ title }</SlideTitle>
				<SlideAction handler={ handler } disabled={ disabled }>{ handlerTitle }</SlideAction>
			</SlideContent>
			<SlideImage image={ { src: imageSrc, alt: title } }/>
		</>
	)
}

export default SlideBestseller
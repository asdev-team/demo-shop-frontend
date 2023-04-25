import React from 'react'

const SlideImage = ( { image } ) => {
	return <img className="heroSliderImg" src={ image.src } alt={ image.alt }/>
}

export default SlideImage
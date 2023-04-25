import React from 'react'
import { Button } from '../Button'

const SlideAction = ( { children, handler, disabled } ) => {
	return <Button className="heroSliderButton" onClick={ handler } disabled={ disabled }>{ children }</Button>
}

export default SlideAction
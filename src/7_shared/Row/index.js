import React from 'react'
import './Row.css'

const Row = ( { children } ) => {
	return <div className="row rowAlignCenter rowSpaceBetween">{ children }</div>
}

export { Row }
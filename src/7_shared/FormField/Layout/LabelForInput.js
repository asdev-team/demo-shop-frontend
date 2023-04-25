import React from 'react'

const LabelForInput = ( { className, forInput, children, show } ) => {
	if ( !show ) {
		return false
	}
	return (
		<label htmlFor={ forInput } className={ className }>
			{ children }
		</label>
	)
}

export default LabelForInput
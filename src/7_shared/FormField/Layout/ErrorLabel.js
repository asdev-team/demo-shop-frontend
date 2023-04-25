import React from 'react'

const ErrorLabel = ( { show, children } ) => {
	if ( !show ) {
		return false
	}
	return (
		<span className="formFieldErrorLabel">{ children }</span>
	)
}

export default ErrorLabel
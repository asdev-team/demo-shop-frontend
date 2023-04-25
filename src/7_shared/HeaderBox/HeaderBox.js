import React from 'react'
import { ContainerInner } from '../ContainerInner'

const HeaderBox = ( { children } ) => {
	return (
		<header className="header">
			<ContainerInner>
				{ children }
			</ContainerInner>
		</header>
	)
}

export default HeaderBox
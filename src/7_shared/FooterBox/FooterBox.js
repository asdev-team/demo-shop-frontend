import React from 'react'
import { ContainerInner } from '../ContainerInner'

const FooterBox = ( { children } ) => {
	return (
		<footer className="footer">
			<ContainerInner>
				{ children }
			</ContainerInner>
		</footer>
	)
}

export default FooterBox
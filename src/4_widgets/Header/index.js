import React from 'react'
import { Logo } from '../../6_entities/Logo'
import { HeaderBox } from '../../7_shared/HeaderBox'
import { Row } from '../../7_shared/Row'
import { Cart } from '../Cart'

const Header = () => {
	return (
		<HeaderBox>
			<Row>
				<Logo/>
				<Cart/>
			</Row>
		</HeaderBox>
	)
}

export { Header }
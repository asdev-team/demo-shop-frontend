import React from 'react'
import { Logo } from '../../6_entities/Logo'
import { Button } from '../../7_shared/Button'
import { FooterBox } from '../../7_shared/FooterBox'
import { Row } from '../../7_shared/Row'

const Footer = () => {
	return (
		<FooterBox>
			<Row>
				<Logo/>
				<Button>
					Обратная связь
				</Button>
			</Row>
		</FooterBox>
	)
}

export { Footer }
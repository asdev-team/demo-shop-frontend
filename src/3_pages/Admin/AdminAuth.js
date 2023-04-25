import React from 'react'
import { AdminLoginBox } from '../../4_widgets/Admin'
import { Container } from '../../7_shared/Container'
import { Page } from '../../7_shared/Page'

export const AdminAuth = ( { error } ) => {
	return (
		<Page className="admin">
			<Container>
				<AdminLoginBox error={ error }/>
			</Container>
		</Page>
	)
}
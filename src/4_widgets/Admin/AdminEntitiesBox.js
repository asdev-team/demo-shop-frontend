import React from 'react'
import { AdminEntitiesTitle, AdminEntitiesWrapper } from '../../7_shared/Admin'

const AdminEntitiesBox = ( { title, children } ) => {
	return (
		<AdminEntitiesWrapper>
			<AdminEntitiesTitle>{ title }</AdminEntitiesTitle>
			{ children }
		</AdminEntitiesWrapper>
	)
}

export default AdminEntitiesBox
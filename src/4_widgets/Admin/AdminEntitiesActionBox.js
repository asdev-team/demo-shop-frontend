import React from 'react'
import { AdminEntitiesAction } from '../../6_entities/Admin'
import { AdminEntitiesActionWrapper } from '../../7_shared/Admin'

const AdminEntitiesActionBox = ( { actions = [] } ) => {
	return (
		<AdminEntitiesActionWrapper>
			{ actions.map( ( item, idx ) => {
				return <AdminEntitiesAction key={ idx } title={ item.title } onAction={ item.action }/>
			} ) }
		</AdminEntitiesActionWrapper>
	)
}

export default AdminEntitiesActionBox
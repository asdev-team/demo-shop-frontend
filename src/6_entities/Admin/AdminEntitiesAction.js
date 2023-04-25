import React from 'react'
import { AdminEntitiesActionItem } from '../../7_shared/Admin'
import { Button } from '../../7_shared/Button'

const AdminEntitiesAction = ( { onAction, title, type = 'primary' } ) => {
	return <AdminEntitiesActionItem>
		<Button
			type="button"
			className={ type }
			onClick={ onAction }
			title={ title }
		>{ title }</Button>
	</AdminEntitiesActionItem>
}

export default AdminEntitiesAction
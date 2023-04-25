import React from 'react'
import { AdminEntitiesActionBox, AdminEntitiesBox } from '../../../4_widgets/Admin'

const AdminFAQ = () => {
	
	return (
		<AdminEntitiesBox title="FAQ">
			<AdminEntitiesActionBox actions={ [
				{
					title: 'Добавить FAQ', action: () => {
					}
				}
			] }/>
		
		</AdminEntitiesBox>
	)
}

export default AdminFAQ
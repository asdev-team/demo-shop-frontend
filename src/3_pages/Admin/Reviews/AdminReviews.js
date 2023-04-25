import React from 'react'
import { AdminEntitiesActionBox, AdminEntitiesBox } from '../../../4_widgets/Admin'

const AdminReviews = () => {
	
	return (
		<AdminEntitiesBox title="Отзывы">
			<AdminEntitiesActionBox actions={ [
				{
					title: 'Добавить отзыв', action: () => {
					}
				}
			] }/>
		
		</AdminEntitiesBox>
	)
}

export default AdminReviews
import React from 'react'
import { AdminBreadcrumbsItem, AdminBreadcrumbsWrapper } from '../../7_shared/Admin'

const AdminBreadcrumbs = ( { items = [] } ) => {
	return (
		<AdminBreadcrumbsWrapper>
			{ items.map( ( item, idx ) => {
				const options = {
					...item,
					isLast: idx === items.length - 1,
					isFirst: idx === 0
				}
				return <AdminBreadcrumbsItem options={ options } key={ idx + item.title }/>
			} ) }
		</AdminBreadcrumbsWrapper>
	)
}

export default AdminBreadcrumbs
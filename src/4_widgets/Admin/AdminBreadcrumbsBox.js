import React from 'react'
import { useAdminBreadcrumbs } from '../../5_features/Admin/useAdminBreadcrumbs'
import { AdminBreadcrumbs } from '../../6_entities/Admin'

const AdminBreadcrumbsBox = () => {
	const breadcrumbs = useAdminBreadcrumbs()
	return <AdminBreadcrumbs items={ breadcrumbs }/>
}

export default AdminBreadcrumbsBox

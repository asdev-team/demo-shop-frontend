import React, { memo } from 'react'
import { routes, routesAdmin } from '../../1_app/config/routes'
import { useAdminLoginProcess } from '../../2_processes/useAdminLoginProcess'

const { AdminMenu } = require( '../../6_entities/Admin' )

const AdminMenuBox = memo( () => {
	const { logout } = useAdminLoginProcess()
	const menuItems  = [
		...routesAdmin.filter( r => r.menu ),
		...routes.filter( r => r.path === '/' )
	]
	return <AdminMenu menuItems={ menuItems } onLogout={ logout }/>
} )

export default AdminMenuBox
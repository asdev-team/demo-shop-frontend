import React from 'react'
import { useAdminAuth } from '../../2_processes/useAdminAuth'
import { AdminAuth } from './AdminAuth'
import { AdminIsAuth } from './AdminIsAuth'

const Admin = ( { route } ) => {
	return useAdminAuth( AdminIsAuth, AdminAuth, route )
}

export default Admin
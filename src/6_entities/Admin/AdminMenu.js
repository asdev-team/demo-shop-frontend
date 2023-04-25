import React from 'react'
import { useAdminData } from '../../5_features/Admin/useAdminData'
import { AdminInfoData, AdminMenuItem, AdminMenuItemLogout, AdminMenuItems, AdminMenuTitle, AdminMenuWrapper } from '../../7_shared/Admin'

const AdminMenu = ( { menuItems = [], onLogout } ) => {
	const { data }  = useAdminData()
	const { admin } = data
	return (
		<AdminMenuWrapper>
			<AdminMenuTitle>Меню</AdminMenuTitle>
			<AdminMenuItems>
				{ menuItems.map( menu => {
					return <AdminMenuItem key={ menu.id } menu={ menu }/>
				} ) }
			</AdminMenuItems>
			<AdminMenuItems>
				<AdminInfoData>
					{ admin.email }
				</AdminInfoData>
				<AdminMenuItemLogout onLogout={ onLogout } moveTo={ '/admin' }/>
			</AdminMenuItems>
		</AdminMenuWrapper>
	)
}

export default AdminMenu
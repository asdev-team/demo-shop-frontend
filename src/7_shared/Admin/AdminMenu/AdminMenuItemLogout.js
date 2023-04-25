import React from 'react'
import { NavLink } from 'react-router-dom'
import IconLogout from '../../Icons/IconLogout'

const AdminMenuItemLogout = ( { onLogout, moveTo = '/admin' } ) => {
	
	return (
		<li className="adminMenuItem adminMenuItemLogout">
			<NavLink
				activeClassName=""
				className="adminMenuItemLink"
				to={ moveTo }
				title="Выход"
				onClick={ onLogout }
			>
				<span className="adminMenuItemIcon"><IconLogout/></span>
				<span className="adminMenuItemTitle">Выход</span>
			</NavLink>
		</li>
	)
}

export default AdminMenuItemLogout
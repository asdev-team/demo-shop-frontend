import React from 'react'
import { useLocation } from 'react-router'
import { NavLink } from 'react-router-dom'

const AdminMenuItem = ( { menu } ) => {
	const location    = useLocation()
	const checkActive = ( match, location ) => {
		if ( !location ) {
			return false
		}
		const { pathname } = location
		return pathname === menu.path
	}
	const onClick     = ( e, path ) => {
		const { pathname } = location
		if ( path === pathname ) {
			e.preventDefault()
		}
	}
	return (
		<li className="adminMenuItem">
			<NavLink
				activeClassName="adminMenuItemLinkActive"
				className="adminMenuItemLink"
				to={ menu.path }
				title={ menu.title }
				onClick={ ( e ) => onClick( e, menu.path ) }
				isActive={ checkActive }
			>
				<span className="adminMenuItemIcon"><menu.Icon/></span>
				<span className="adminMenuItemTitle">{ menu.title }</span>
			</NavLink>
		</li>
	)
}

export default AdminMenuItem
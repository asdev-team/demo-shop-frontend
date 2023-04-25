import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminBreadcrumbsItem = ( {
	options = {
		title: '',
		path: '',
		isSeparator: false,
		isLast: false,
		isFirst: false
	}
} ) => {
	if ( ( options.isFirst && options.isLast ) || ( !options.isFirst && options.isLast ) || options.noLink ) {
		return (
			<li className="adminBreadcrumbsItem">
				<span className="adminBreadcrumbsLast">{ options.title }</span>
			</li>
		)
	}
	if ( options.isFirst && !options.isLast ) {
		return (
			<li className="adminBreadcrumbsItem">
				<NavLink
					className="adminBreadcrumbsLink"
					to={ options.path }
					title={ options.title }
				>
					{ options.title }
				</NavLink>
			</li>
		)
	}
	if ( options.isSeparator ) {
		return (
			<li className="adminBreadcrumbsItem">
				<span className="adminBreadcrumbsSeparator">{ options.title }</span>
			</li>
		)
	}
	if ( options.noLink ) {
	
	}
	return (
		<li className="adminBreadcrumbsItem">
			<NavLink
				className="adminBreadcrumbsLink"
				to={ options.path }
				title={ options.title }
			>
				{ options.title }
			</NavLink>
		</li>
	)
}

export default AdminBreadcrumbsItem
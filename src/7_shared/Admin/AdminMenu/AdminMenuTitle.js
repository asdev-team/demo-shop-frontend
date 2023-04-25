import React from 'react'
import { IconMenu } from '../../Icons'

const AdminMenuTitle = ( { children } ) => {
	return <h2 className="adminMenuTitle">
		<span className="adminMenuTitleIcon"><IconMenu/></span>
		<span className="adminMenuTitleText">{ children }</span>
	</h2>
}
export default AdminMenuTitle
import React from 'react'

const AdminLoginError = ( { show = false, label = '' } ) => {
	if ( !show ) {
		return false
	}
	return <div className="adminLoginError">{ label }</div>
}

export default AdminLoginError
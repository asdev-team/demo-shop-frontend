import React from 'react'

const AdminLoginForm = ( { children, onSubmit } ) => {
	return <form className="adminLoginForm" onSubmit={ onSubmit }>{ children }</form>
}

export default AdminLoginForm
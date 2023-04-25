import React from 'react'
import { useSelector } from 'react-redux'

const useAdminData = () => {
	return useSelector( state => state.admin )
}

export { useAdminData }
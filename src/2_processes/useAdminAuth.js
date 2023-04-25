import React from 'react'
import { useAdminData } from '../5_features/Admin/useAdminData'
import { DataFetching } from '../7_shared/DataProcessing'
import { Startapp } from '../7_shared/Startapp'

const useAdminAuth = ( ComponentIsAuth, ComponentAuth, route ) => {
	const adminData = useAdminData()
	
	const error = {
		status: adminData.error,
		data: adminData.errorData
	}
	
	if ( adminData.fetching ) {
		return ( <Startapp><DataFetching fetching={ adminData.fetching }/></Startapp> )
	}
	
	if ( adminData.fetched ) {
		return ( <ComponentIsAuth route={ route }/> )
	}
	
	if ( adminData.error || ( !adminData.fetching && !adminData.fetched ) ) {
		return ( <ComponentAuth error={ error }/> )
	}
	return false
}

export { useAdminAuth }
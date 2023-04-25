import axios from 'axios'
import { getCookie } from '../../lib/cookie'

const apiBase = () => {
	return 'https://domain.com//shop'
}

const apiBasicAuth = {
	username: 'shop-front',
	password: 'shop-app'
}

const apiHeaderWithToken = {
	getBasicToken: () => btoa( apiBasicAuth.username + ':' + apiBasicAuth.password ),
	getPrivateToken: () => getCookie( 'access_token' ),
	getAdminToken: () => getCookie( 'access_admin_token' ),
	getHeaders: ( tokenType ) => {
		const basicToken = apiHeaderWithToken.getBasicToken()
		const headers    = {
			'x-access-token': 'Basic ' + basicToken
		}
		if ( tokenType === 'private' ) {
			const private_token       = apiHeaderWithToken.getPrivateToken()
			headers[ 'x-user-token' ] = 'Bearer ' + private_token
		}
		if ( tokenType === 'admin' ) {
			const admin_token          = apiHeaderWithToken.getAdminToken()
			headers[ 'x-admin-token' ] = 'Bearer ' + admin_token
		}
		return headers
	}
}

export const API = async ( data, tokenType = 'basic' ) => {
	return new Promise( ( resolve, reject ) => {
		const headers = apiHeaderWithToken.getHeaders( tokenType )
		
		const instance = axios
			.create( {
				method: 'POST',
				headers,
				responseType: 'json',
				baseURL: apiBase()
			} )
			.request( {
				data: data
			} )
			.then( res => {
				const responseData = res.data
				
				if ( responseData.status ) {
					resolve( { ...responseData.data, message: responseData.message } )
				}
				else {
					reject( responseData )
				}
			} )
			.catch( err => {
				reject( err?.response?.data || err )
			} )
	} )
}


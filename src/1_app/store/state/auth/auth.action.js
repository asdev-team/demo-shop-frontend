import { setCookie } from '../../../../lib/cookie'
import { logger } from '../../../../lib/logger'
import { API } from '../../../api'
import { FULFILLED, PENDING, REJECTED } from '../../methods/actionMethod'

export const authantificate = () => {
	logger( '[Auth Actions] Authantificate' )
	const PLACE = 'AUTH'
	return dispatch => {
		dispatch( PENDING( PLACE ) )
		const data = {
			method: 'getToken'
		}
		API( data ).then( responseData => {
			setCookie( 'access_token', responseData.access_token )
			dispatch( FULFILLED( PLACE, responseData ) )
		} ).catch( errorData => {
			dispatch( REJECTED( PLACE, errorData ) )
		} )
	}
}
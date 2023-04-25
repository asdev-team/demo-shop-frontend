import { logger } from '../../../../lib/logger'
import { API } from '../../../api'
import { FULFILLED, PENDING, REJECTED } from '../../methods/actionMethod'

export const getProducts = () => {
	logger( '[Products Actions] getProducts' )
	const PLACE = 'PROD'
	return dispatch => {
		dispatch( PENDING( PLACE ) )
		const data = {
			method: 'getProducts'
		}
		API( data, 'private' ).then( responseData => {
			dispatch( FULFILLED( PLACE, responseData ) )
		} ).catch( errorData => {
			dispatch( REJECTED( PLACE, errorData ) )
		} )
	}
}
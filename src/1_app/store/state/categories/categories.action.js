import { logger } from '../../../../lib/logger'
import { API } from '../../../api'
import { FULFILLED, PENDING, REJECTED } from '../../methods/actionMethod'

export const getCategories = () => {
	logger( '[Categories Actions] getCategories' )
	const PLACE = 'CAT'
	return dispatch => {
		dispatch( PENDING( PLACE ) )
		const data = {
			method: 'getCategories'
		}
		API( data, 'private' ).then( responseData => {
			dispatch( FULFILLED( PLACE, responseData ) )
		} ).catch( errorData => {
			dispatch( REJECTED( PLACE, errorData ) )
		} )
	}
}
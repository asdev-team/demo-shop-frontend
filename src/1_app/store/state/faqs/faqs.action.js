import { logger } from '../../../../lib/logger'
import { API } from '../../../api'
import { FULFILLED, PENDING, REJECTED } from '../../methods/actionMethod'

export const getFAQs = () => {
	logger( '[FAQs Actions] getFAQs' )
	const PLACE = 'FAQ'
	return dispatch => {
		dispatch( PENDING( PLACE ) )
		const data = {
			method: 'getFAQs'
		}
		API( data, 'private' ).then( responseData => {
			dispatch( FULFILLED( PLACE, responseData ) )
		} ).catch( errorData => {
			dispatch( REJECTED( PLACE, errorData ) )
		} )
	}
}
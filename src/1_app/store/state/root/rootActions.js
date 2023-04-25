import { logger } from '../../../../lib/logger'
import { resetAdminAuth } from '../admin/admin.action'
import { authantificate } from '../auth/auth.action'

export function resetStore() {
	logger( '[Root Actions] Reset Store' )
	localStorage.clear()
	return {
		type: 'RESET_STORE'
	}
}

export function logout() {
	logger( '[Root Actions] Logout' )
	return dispatch => {
		dispatch( resetAdminAuth() )
	}
}

export function init() {
	logger( '[Root Actions] Init' )
	return dispatch => {
		dispatch( authantificate() )
	}
}
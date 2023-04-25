import { removeCookie } from '../../../../lib/cookie'
import { logger } from '../../../../lib/logger'

export const resetAdminAuth = () => {
	logger( '[Admin Actions] resetAdminAuth' )
	removeCookie( 'access_admin_token' )
	return {
		type: 'ADMIN_RESET'
	}
}
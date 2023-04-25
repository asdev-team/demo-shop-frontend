import React from 'react'
import { AdminBreadcrumbsBox, AdminMenuBox } from '../../4_widgets/Admin'
import { AdminContainer, AdminContent } from '../../7_shared/Admin'
import { Page } from '../../7_shared/Page'

export const AdminIsAuth = ( { route } ) => {
	return (
		<Page className="admin">
			<AdminContent>
				<AdminMenuBox/>
				<AdminContainer>
					<AdminBreadcrumbsBox/>
					<route.Child/>
				</AdminContainer>
			</AdminContent>
		</Page>
	)
}
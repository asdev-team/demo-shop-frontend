import React, { useLayoutEffect } from 'react'
import { useCategoriesProcess } from '../../../2_processes/useCategoriesProcess'
import { AdminEntitiesActionBox, AdminEntitiesBox } from '../../../4_widgets/Admin'
import { useCategories } from '../../../5_features/Categories'
import { useTable } from '../../../5_features/Table'
import { DataError, DataFetched, DataFetching } from '../../../7_shared/DataProcessing'

const AdminCategories = () => {
	const state        = useCategories( false )
	const categories   = state.data?.categories || []
	const handler      = useCategoriesProcess()
	const columns      = [
		{ header: 'ID', key: 'id' },
		{ header: 'Название', key: 'title' },
		{ header: 'Дата создания', key: 'createdAt' },
		{ header: 'Дата обновления', key: 'updatedAt' },
		{ header: 'Действия', key: 'actions' }
	]
	const tableHandler = {
		onEdit: ( item ) => {
			handler.toEdit( item.id )
		},
		onRemove: () => {
		}
	}
	const Table        = useTable( columns, categories, tableHandler )
	
	useLayoutEffect( handler.get, [] )
	
	return (
		<AdminEntitiesBox title="Категории">
			<AdminEntitiesActionBox actions={ [ { title: 'Добавить категорию', action: handler.toAdd } ] }/>
			<DataFetching fetching={ state.fetching } wrapper={ false }/>
			<DataFetched fetched={ state.fetched } wrapper={ false }>
				{ Table }
			</DataFetched>
			<DataError error={ state.error } errorData={ state.errorData } wrapper={ false }/>
		</AdminEntitiesBox>
	)
}

export default AdminCategories
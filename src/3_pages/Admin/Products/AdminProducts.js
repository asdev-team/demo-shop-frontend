import React, { useLayoutEffect } from 'react'
import { useProductsProcess } from '../../../2_processes/useProductsProcess'
import { AdminEntitiesActionBox, AdminEntitiesBox } from '../../../4_widgets/Admin'
import { useProducts } from '../../../5_features/Products'
import { useTable } from '../../../5_features/Table'
import { DataError, DataFetched, DataFetching } from '../../../7_shared/DataProcessing'

const AdminProducts = () => {
	const state        = useProducts( false )
	const products     = state.data?.products || []
	const handler      = useProductsProcess()
	const columns      = [
		{ header: 'ID', key: 'id' },
		{ header: 'Название', key: 'title' },
		{ header: 'Количество', key: 'quantity' },
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
	const Table        = useTable( columns, products, tableHandler )
	useLayoutEffect( handler.get, [] )
	
	return (
		<AdminEntitiesBox title="Товары">
			<AdminEntitiesActionBox actions={ [ { title: 'Добавить товар', action: handler.toAdd } ] }/>
			<DataFetching fetching={ state.fetching } wrapper={ false }/>
			<DataFetched fetched={ state.fetched } wrapper={ false }>
				{ Table }
			</DataFetched>
			<DataError error={ state.error } errorData={ state.errorData } wrapper={ false }/>
		</AdminEntitiesBox>
	)
}

export default AdminProducts
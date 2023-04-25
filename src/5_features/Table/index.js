import React from 'react'
import { TableCol, TableColActions, TableRow, TableWrapper } from '../../7_shared/Table'

const TableHeader = ( { columns } ) => {
	return (
		<TableRow>
			{ columns.map( ( c, idx ) => {
				return <TableCol key={ 'header_' + idx } id={ c.key }>{ c.header }</TableCol>
			} ) }
		</TableRow>
	)
}
const TableData   = ( { columns, data, handler } ) => {
	return data.map( d => {
		return (
			<TableRow key={ 'row_' + d.id }>
				{ columns.map( ( c, idx ) => {
					if ( c.key === 'actions' ) {
						return <TableCol key={ 'data_' + idx } id={ c.key }><TableColActions item={ d } onRemove={ handler.onRemove } onEdit={ handler.onEdit }/></TableCol>
					}
					return <TableCol key={ 'data_' + idx } id={ c.key }>{ d[ c.key ] }</TableCol>
				} ) }
			</TableRow>
		)
	} )
}
const useTable    = ( columns, data, handler ) => {
	return (
		<TableWrapper>
			<TableHeader columns={ columns }/>
			<TableData columns={ columns } data={ data } handler={ handler }/>
		</TableWrapper>
	)
}

export { useTable }
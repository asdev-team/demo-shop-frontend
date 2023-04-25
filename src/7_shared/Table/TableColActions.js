import React from 'react'
import { IconEdit, IconRemoved } from '../Icons'

const TableColActions = ( { item, onEdit, onRemove } ) => {
	return (
		<>
			<button onClick={ () => onEdit( item ) }><IconEdit/></button>
			<button onClick={ () => onRemove( item ) }><IconRemoved/></button>
		</>
	)
}

export default TableColActions
import React from 'react'

const TableCol = ( { children, id } ) => {
	return <div className="tableCol" data-col={ id }>{ children }</div>
}

export default TableCol
import React from 'react'

const TableWrapper = ( { children } ) => {
	return (
		<div className="tableWrapper">
			<div className="table">{ children }</div>
		</div>
	)
}

export default TableWrapper
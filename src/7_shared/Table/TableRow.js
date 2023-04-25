import React from 'react'

const TableRow = ( { children } ) => {
	const colCount = children.length - 2
	return <div className="tableRow" style={ { '--countColumn': colCount } }>{ children }</div>
}

export default TableRow
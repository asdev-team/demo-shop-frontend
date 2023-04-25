import React from 'react'
import { Button } from '../../7_shared/Button'
import { CategoriesListItem } from '../../7_shared/Categories'

const Category = ( { isSelected, category, handler } ) => {
	const className = isSelected
	                  ? 'primary'
	                  : ''
	return (
		<CategoriesListItem>
			<Button className={ className } onClick={ handler }>{ category.title }</Button>
		</CategoriesListItem>
	)
}

export { Category }
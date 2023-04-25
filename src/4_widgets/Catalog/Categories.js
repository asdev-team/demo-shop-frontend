import React from 'react'
import { Category } from '../../6_entities/Category'
import { CategoriesList } from '../../7_shared/Categories'

const Categories = ( { items, selected, onSelect } ) => {
	const categories = [
		{ id: 0, title: 'Все категории' },
		...items
	]
	return (
		<CategoriesList>
			{ categories.map( category => {
				return <Category key={ category.id } category={ category } isSelected={ category.id === selected } handler={ () => onSelect( category.id ) }/>
			} ) }
		</CategoriesList>
	)
}

export { Categories }
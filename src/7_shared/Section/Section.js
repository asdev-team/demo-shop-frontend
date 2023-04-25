import React from 'react'
import { ContainerInner } from '../ContainerInner'
import SectionTitle from './SectionTitle'

const Section = ( { className, title = '', children } ) => {
	const sectionClass = [ 'section' ]
	if ( className ) {
		sectionClass.push( className )
	}
	return (
		<section className={ sectionClass.join( ' ' ) }>
			<ContainerInner>
				{ !!title && <SectionTitle>{ title }</SectionTitle> }
				{ children }
			</ContainerInner>
		</section>
	)
}

export default Section
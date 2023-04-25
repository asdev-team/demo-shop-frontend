import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFAQs } from '../../1_app/store/state/faqs/faqs.action'

const useFAQs = () => {
	const faqs     = useSelector( state => state.faqs )
	const dispatch = useDispatch()
	
	useEffect( () => dispatch( getFAQs() ), [] )
	return faqs
}

export { useFAQs }
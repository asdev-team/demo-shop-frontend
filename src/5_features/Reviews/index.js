import React, { useEffect, useState } from 'react'
import { logger } from '../../lib/logger'

const iniState = {
	fetching: false,
	fetched: false,
	error: false,
	data: [],
	errorData: null
}

const useReviews = () => {
	const [ reviews, setReviews ] = useState( iniState )
	
	const handle = {
		mount: () => {
			logger( '[useReviews] Mount and Fetching' )
			setReviews( prev => {
				prev.fetching = true
				return { ...prev }
			} )
			
			setTimeout( () => {
				logger( '[useReviews] Fetched' )
				setReviews( prev => {
					prev.fetching = false
					prev.fetched  = true
					prev.data     = [
						{
							id: 1, author: 'Leanne Graham',
							text: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\\ntempora.'
						},
						{
							id: 2, author: 'Ervin Howell',
							text: 'quia molestiae reprehenderit quasi aspernatur\\naut expedita occaecat.'
						},
						{
							id: 3, author: 'Clementine Bauch',
							text: 'non et atque\\noccaecati deserunt quas accusantium unde odit nobis qu.'
						},
						{
							id: 4, author: 'Patricia Lebsack',
							text: 'harum non quasi et ratione\\ntempore iure ex voluptates in ratione\\n.'
						},
						{
							id: 5, author: 'Chelsey Dietrich',
							text: 'doloribus at sed quis culpa deserunt consectetur qui praesentium\\nac.'
						},
						{
							id: 6, author: 'Kurtis Weissnat',
							text: 'maiores sed dolores similique labore et inventore et\\nquasi temporib.'
						}
					]
					return { ...prev }
				} )
			}, 1000 )
		}
	}
	
	useEffect( handle.mount, [] )
	return reviews
}

export { useReviews }
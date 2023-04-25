import React, { useEffect, useState } from 'react'
import { logger } from '../../lib/logger'
import imgUrl from '../../static/air.png'

const iniState = {
	fetching: false,
	fetched: false,
	error: false,
	data: [],
	errorData: null
}

const useSlider = () => {
	const [ slides, setSlides ] = useState( iniState )
	const handle                = {
		mount: () => {
			logger( '[useSlider] Mount and Fetching' )
			setSlides( prev => {
				prev.fetching = true
				return { ...prev }
			} )
			
			setTimeout( () => {
				logger( '[useSlider] Fetched' )
				setSlides( prev => {
					prev.fetching = false
					prev.fetched  = true
					prev.data     = [
						{ id: 1, title: 'Наушники AirPods 1 with Charrging Case', imageSrc: imgUrl },
						{ id: 2, title: 'Наушники AirPods 2 with Charrging Case', imageSrc: imgUrl },
						{ id: 3, title: 'Наушники AirPods 3 with Charrging Case', imageSrc: imgUrl }
					]
					return { ...prev }
				} )
			}, 1000 )
		}
	}
	useEffect( handle.mount, [] )
	return slides
}

export { useSlider }
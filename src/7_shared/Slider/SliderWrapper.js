import React, { useEffect, useRef, useState } from 'react'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { slider } from '../../1_app/config/slider'

SwiperCore.use( [ Navigation ] )

const SliderWrapper = ( { Slides } ) => {
	const prevRef                       = useRef( null )
	const nextRef                       = useRef( null )
	const [ swiperInst, setSwiperInst ] = useState( null )
	
	const sliderConfig = Object.assign( slider, {
		navigation: {
			prevEl: prevRef.current || undefined,
			nextEl: nextRef.current || undefined
		},
		controller: { control: swiper => swiper },
		className: 'heroSlider',
		onInit: ( swiper ) => setSwiperInst( swiper ),
		onSlideChange: () => console.log( 'slide change' )
	} )
	useEffect( () => {
		if ( swiperInst && prevRef && nextRef ) {
			swiperInst.params.navigation.prevEl = prevRef.current
			swiperInst.params.navigation.nextEl = nextRef.current
			swiperInst.navigation.destroy()
			swiperInst.navigation.init()
			swiperInst.navigation.update()
		}
	}, [ swiperInst, prevRef, nextRef ] )
	return (
		<div className="heroSliderWrapper">
			<Swiper
				spaceBetween={ sliderConfig.spaceBetween }
				slidesPerView={ sliderConfig.slidesPerView }
				onSlideChange={ sliderConfig.onSlideChange }
				onInit={ sliderConfig.onInit }
				className={ sliderConfig.className }
				controller={ sliderConfig.controller }
				navigation={ sliderConfig.navigation }
			>
				{ Slides.map( Slide => {
					return (
						<SwiperSlide className="heroSliderItem" key={ Slide.key }>{ Slide }</SwiperSlide>
					)
				} ) }
			</Swiper>
			<div ref={ prevRef } className="heroSliderArrow heroSliderArrowPrev"/>
			<div ref={ nextRef } className="heroSliderArrow heroSliderArrowNext"/>
		</div>
	)
}

export default SliderWrapper
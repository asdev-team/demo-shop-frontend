import React from 'react'
import { Swiper } from 'swiper/react'

const ReviewList = ( { children } ) => {
	return (
		<Swiper
			breakpoints={ {
				0: {
					slidesPerView: 1
				},
				576: {
					slidesPerView: 2
				},
				992: {
					slidesPerView: 3
				}
			} }
			spaceBetween={ 30 }
			slidesPerView={ 3 }
			className="reviewList"
		>
			{ children }
		</Swiper>
	)
}

export default ReviewList
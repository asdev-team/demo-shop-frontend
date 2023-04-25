import React from 'react'
import { SwiperSlide } from 'swiper/react'
import { useReviews } from '../../5_features/Reviews'
import { Review } from '../../6_entities/Review'
import { Button } from '../../7_shared/Button'
import { DataError, DataFetched, DataFetching } from '../../7_shared/DataProcessing'
import { ReviewList } from '../../7_shared/Review'
import { Section } from '../../7_shared/Section'

const Reviews = () => {
	
	const state = useReviews()
	
	return (
		<Section title="Отзывы">
			<DataFetching fetching={ state.fetching }/>
			<DataFetched fetched={ state.fetched }>
				<ReviewList>
					{ state.data.map( review => {
						return (
							<SwiperSlide key={ review.id }>
								<Review review={ review }/>
							</SwiperSlide>
						)
					} ) }
				</ReviewList>
				<Button className="reviewsButton primary">Оставить отзыв</Button>
			</DataFetched>
			<DataError error={ state.error } errorData={ state.errorData }/>
		</Section>
	)
}

export { Reviews }
import React from 'react'
import { ReviewAuthor, ReviewText, ReviewWrapper } from '../../7_shared/Review'

const Review = ( { review } ) => {
	return (
		<ReviewWrapper>
			<ReviewAuthor>{ review.author }</ReviewAuthor>
			<ReviewText>{ review.text }</ReviewText>
		</ReviewWrapper>
	)
}

export { Review }
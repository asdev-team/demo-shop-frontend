import React from 'react'
import { Catalog } from '../../4_widgets/Catalog'
import { FAQs } from '../../4_widgets/FAQs'
import { Footer } from '../../4_widgets/Footer'
import { Header } from '../../4_widgets/Header'
import { Purchase } from '../../4_widgets/Purchase'
import { Reviews } from '../../4_widgets/Reviews'
import { SliderBestseller } from '../../4_widgets/Slider'
import { Container } from '../../7_shared/Container'
import { Content } from '../../7_shared/Content'
import { Page } from '../../7_shared/Page'

const Home = () => {
	return (
		<Page className="home">
			<Container>
				<Header/>
				<Content>
					<SliderBestseller/>
					<Catalog/>
					<Reviews/>
					<Purchase/>
					<FAQs/>
				</Content>
				<Footer/>
			</Container>
		</Page>
	)
}

export { Home }
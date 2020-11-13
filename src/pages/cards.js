import React from 'react'
import { Container } from '../components/AccountHeroSection/AccountHeroElements'
import CardsSection from '../components/Cards Section'
import SecondarySidebar from '../components/SecondarySidebar'

const CardsPage = () => {
    return (
        <>
            <Container>
                <SecondarySidebar />
                <CardsSection />
            </Container>    
        </>
    )
}

export default CardsPage

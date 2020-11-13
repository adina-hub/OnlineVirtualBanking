import React from 'react'
import { Container } from '../components/AccountHeroSection/AccountHeroElements'
import CardDetailsSection from '../components/Card Details Section'
import SecondarySidebar from '../components/SecondarySidebar'

const CardDetailsPage = () => {
    return (
        <>
            <Container>
                <SecondarySidebar />
                <CardDetailsSection />
            </Container>    
        </>
    )
}

export default CardDetailsPage

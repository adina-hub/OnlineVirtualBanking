import React from 'react'
import { Container } from '../components/AccountHeroSection/AccountHeroElements'
import SecondarySidebar from '../components/SecondarySidebar'
import NewTransactionSection from '../components/NewTransaction'

const NewTransactionPage = () => {
    return (
        <>
            <Container>
                <SecondarySidebar />
                <NewTransactionSection />
            </Container>    
        </>
    )
}

export default NewTransactionPage

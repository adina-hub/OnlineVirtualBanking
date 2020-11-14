import React from 'react'
import { Container } from '../components/AccountHeroSection/AccountHeroElements'
import SecondarySidebar from '../components/SecondarySidebar'
import TransactionDetails from '../components/Transaction Details Section'

const TransactionDetailsPage = () => {
    return (
        <>
            <Container>
                <SecondarySidebar />
                <TransactionDetails />
            </Container>    
        </>
    )
}

export default TransactionDetailsPage

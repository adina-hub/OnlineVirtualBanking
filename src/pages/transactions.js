import React from 'react'
import { Container } from '../components/AccountHeroSection/AccountHeroElements'
import SecondarySidebar from '../components/SecondarySidebar'
import TransactionsSection from '../components/Transactions'

const TransactionsPage = () => {
    return (
        <>
           <Container>
                <SecondarySidebar />
                <TransactionsSection />
           </Container>      
        </>
    )
}

export default TransactionsPage

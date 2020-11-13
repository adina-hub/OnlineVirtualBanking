import React from 'react'
import AccountHeroSection from '../components/AccountHeroSection'
import { Container } from '../components/AccountHeroSection/AccountHeroElements'
import SecondarySidebar from '../components/SecondarySidebar'

const AccountPage = () => {
    return (
        <>
            <Container>
               <SecondarySidebar />
               <AccountHeroSection /> 
            </Container>
            
        </>
    )
}

export default AccountPage
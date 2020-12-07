import React from 'react'
import UpdateProfileSection from '../components/UpdateProfile'
import { Container } from '../components/AccountHeroSection/AccountHeroElements'
import SecondarySidebar from '../components/SecondarySidebar'

const UpdateProfilePage = () => {
    return (
        <>
            <Container>
               <SecondarySidebar />
               <UpdateProfileSection/> 
            </Container>
            
        </>
    )
}

export default UpdateProfilePage

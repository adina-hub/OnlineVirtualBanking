import React from 'react'
import { FaCreditCard, FaExchangeAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import {Container, SidebarContainer, MainContainer, SidebarNavbar, NavbarElement, NavbarMenu, 
        Avatar, Text, UserInfo, NavbarIcons, NavbarIcon, NavbarElements} from './AccountHeroElements'

const AccountHeroSection = () => {

    return (
        <>
            <Container>
                <SidebarContainer>
                    <SidebarNavbar>
                        <UserInfo>
                           <Avatar></Avatar>
                            <Text>Leigh Anne</Text> 
                        </UserInfo>
                        <NavbarMenu>
                            <NavbarIcons>
                                <NavbarIcon><FaUser /></NavbarIcon>
                                <NavbarIcon><FaCreditCard /></NavbarIcon>
                                <NavbarIcon><FaExchangeAlt /></NavbarIcon>
                                <NavbarIcon><FaSignOutAlt /></NavbarIcon>
                            </NavbarIcons>
                            <NavbarElements>
                                <NavbarElement to='/'>Account</NavbarElement>
                                <NavbarElement to='/'>Cards</NavbarElement>
                                <NavbarElement to='/'>Transactions</NavbarElement>
                                <NavbarElement to='/'>Log Out</NavbarElement>
                            </NavbarElements>
                        </NavbarMenu>
                    </SidebarNavbar>
                </SidebarContainer>
                <MainContainer>
                    
                </MainContainer>
            </Container>
           

        </>
    )
}

export default AccountHeroSection

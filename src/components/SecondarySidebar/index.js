import React from 'react'
import {SidebarNavbar, UserInfo, Avatar, TextH2, NavbarMenu, NavbarElement, NavbarIcon, 
    NavbarText} from './SecondarySidebarElements'
import {FaUser, FaCreditCard, FaExchangeAlt, FaSignOutAlt} from 'react-icons/fa'

const SecondarySidebar = () => {
    return (
        <>
            <SidebarNavbar>
                <UserInfo>
                    <Avatar></Avatar>
                    <TextH2>Leigh Anne</TextH2> 
                </UserInfo>
                <NavbarMenu>
                    <NavbarElement>
                        <NavbarIcon><FaUser /></NavbarIcon>
                        <NavbarText to='/account'>Account</NavbarText>
                    </NavbarElement>
                    <NavbarElement>
                        <NavbarIcon><FaCreditCard /></NavbarIcon>
                        <NavbarText to='/cards'>Cards</NavbarText>
                    </NavbarElement>
                    <NavbarElement>
                        <NavbarIcon><FaExchangeAlt /></NavbarIcon>
                        <NavbarText to='/transactions'>Transactions</NavbarText>
                    </NavbarElement>
                    <NavbarElement>
                        <NavbarIcon><FaSignOutAlt /></NavbarIcon>
                        <NavbarText to='/'>Log Out</NavbarText>
                    </NavbarElement>
                </NavbarMenu>
            </SidebarNavbar>
        </>
    )
}

export default SecondarySidebar

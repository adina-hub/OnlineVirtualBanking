import React, {useState} from 'react'
import {SidebarNavbar, UserInfo, Avatar, TextH2, NavbarMenu, NavbarElement, NavbarIcon, 
    NavbarText, Balance, Text} from './SecondarySidebarElements'
import {FaUser, FaCreditCard, FaExchangeAlt, FaSignOutAlt} from 'react-icons/fa'
import {useHistory} from 'react-router-dom'
import { Alert } from '../Signup/SignupElements'
import { useAuth } from "../../context/AuthContext"

export default function SecondarySidebar() {
    const [error, setError] = useState("")
    const { logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')

        try {
          await logout()
          history.pushState('/signin') 
        } catch {
          setError("Failed to log out")
        }
    }

    function handleAccount() {
        history.push('/account')
    }

    function handleTransactions() {
        history.push('/transactions')
    }

    function handleCards() {
        history.push('/cards')
    }

    return (
        <>
            <SidebarNavbar>
                <UserInfo>
                    <Avatar></Avatar>
                    <TextH2>Leigh Anne</TextH2> 
                </UserInfo>
                <Balance>
                    <TextH2>Balance</TextH2>
                    <Text>$ 100,273.38</Text>
                    {error && <Alert>{error}</Alert>}
                </Balance>
                <NavbarMenu>
                    <NavbarElement>
                        <NavbarIcon><FaUser /></NavbarIcon>
                        <NavbarText onClick={handleAccount}>Account</NavbarText>
                    </NavbarElement>
                    <NavbarElement>
                        <NavbarIcon><FaCreditCard /></NavbarIcon>
                        <NavbarText onClick={handleCards}>Cards</NavbarText>
                    </NavbarElement>
                    <NavbarElement>
                        <NavbarIcon><FaExchangeAlt /></NavbarIcon>
                        <NavbarText onClick={handleTransactions}>Transactions</NavbarText>
                    </NavbarElement>
                    <NavbarElement>
                        <NavbarIcon><FaSignOutAlt /></NavbarIcon>
                        <NavbarText onClick={handleLogout}>Log Out</NavbarText>
                    </NavbarElement>
                </NavbarMenu>
            </SidebarNavbar>
        </>
    )
}



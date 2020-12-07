import React, {useState, useEffect} from 'react'
import {SidebarNavbar, UserInfo, Avatar, TextH2, NavbarMenu, NavbarElement, NavbarIcon, 
    NavbarText} from './SecondarySidebarElements'
import {FaUser, FaCreditCard, FaExchangeAlt, FaSignOutAlt} from 'react-icons/fa'
import {useHistory} from 'react-router-dom'
import { Alert } from '../Signup/SignupElements'
import { useAuth } from "../../context/AuthContext"
import firebase from 'firebase'
import { auth } from '../../firebase'

export default function SecondarySidebar() {
    const [error, setError] = useState("")
    const { logout } = useAuth()
    const [user, setUser] = useState('')

    const history = useHistory()

    useEffect(() => {
        async function getUser() {
            const snap = await firebase.database().ref('User').orderByChild('id').equalTo(auth.currentUser.uid).once("value")
            var childData = snap.val();
            var key = Object.keys(childData)[0];   
            setUser(childData[key]);
        }
        getUser()
    }, [])

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
                    <TextH2>{user.fullname}</TextH2> 
                </UserInfo>
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



import React, {useRef, useState, useEffect} from 'react'
import firebase from 'firebase'
import {MainContainer, TextH1, Data , UserInfo, Form, NavBtnLink,
       FormLabel, FormInput, SecondaryContainer, AvatarContainer} from './AccountHeroElements'
import {Avatar, TextH2} from '../SecondarySidebar/SecondarySidebarElements'
import {useHistory} from 'react-router-dom'
import { auth } from '../../firebase'

export default function AccountHeroSection() {
    const nameRef = useRef()
    const emailRef = useRef()
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

    async function handleEdit(e) {
        history.push('/update-profile')
    }

    return (
        <>
                <MainContainer>
                    <TextH1>Account</TextH1>
                    <SecondaryContainer>
                        <UserInfo>
                            <AvatarContainer>
                                <Avatar></Avatar>
                                <TextH2>{user.fullname}</TextH2>
                            </AvatarContainer>
                            <Data>
                                <Form onSubmit={handleEdit}>
                                    <FormLabel id="name">Full Name</FormLabel>
                                    <FormInput type='text' ref={nameRef} value={user.fullname} readOnly/>
                                    <FormLabel id="email">Email</FormLabel>
                                    <FormInput type='email' ref={emailRef} value={user.email} readOnly/>
                                    <NavBtnLink  type="submit">Edit Info</NavBtnLink>
                                </Form>
                            </Data>
                        </UserInfo>
                    </SecondaryContainer>
                </MainContainer>
        </>
    )
}


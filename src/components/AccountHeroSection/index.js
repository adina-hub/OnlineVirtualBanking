import React, {useRef, useState, useEffect} from 'react'
import firebase from 'firebase'
import {MainContainer, TextH1, Second, Label, Data , UserInfo, Form, Alert, NavBtnLink,
       FormLabel, FormInput, SecondaryContainer, AvatarContainer} from './AccountHeroElements'
import {Avatar, TextH2} from '../SecondarySidebar/SecondarySidebarElements'
import { useAuth } from "../../context/AuthContext"
import {useHistory} from 'react-router-dom'
import { auth } from '../../firebase'

export default function AccountHeroSection() {
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updatePassword, updateEmail } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
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

    async function updateEmailInfo(data) {
        const snap = await firebase.database().ref('User').orderByChild('id').equalTo(auth.currentUser.uid).once("value");
        var childData = snap.val();
        var key = Object.keys(childData)[0];  
        firebase.database().ref('User/' + key).update({email: data}); 
    }

    async function updateName(data) {
        const snap = await firebase.database().ref('User').orderByChild('id').equalTo(auth.currentUser.uid).once("value");
        var childData = snap.val();
        var key = Object.keys(childData)[0];  
        firebase.database().ref('User/' + key).update({fullname: data}); 
    }

    async function updatePasswordInfo(data) {
        const snap = await firebase.database().ref('User').orderByChild('id').equalTo(auth.currentUser.uid).once("value");
        var childData = snap.val();
        var key = Object.keys(childData)[0];  
        firebase.database().ref('User/' + key).update({password: data}); 
    }

    async function handleSubmit(e) {
      e.preventDefault()
  
      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError("Passwords do not match")
      }
  
      const promises = []
      setLoading(true)
      setError("")
      setMessage("")
  
      if(emailRef.current.value !== currentUser.email) {
          promises.push(updateEmail(emailRef.current.value))
      }
  
      if(passwordRef.current.value === passwordConfirmRef.current.value) {
          promises.push(updatePassword(passwordRef.current.value))
          if(passwordRef.current.value){
              updatePasswordInfo(passwordRef.current.value)
          }
      }

      if(emailRef.current.value){
        updateEmailInfo(emailRef.current.value)
      }
      if(nameRef.current.value){
        updateName(nameRef.current.value)
      }

      Promise.all(promises).then(() => {
        history.push('/account')
        setMessage("Info updated!")
        window.location.reload()
      }).catch(() => {
          setError("Failed to update account")
      }).finally(() => {
          setLoading(false)
      })
  
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
                                <Label>Full Name: {user.fullname}</Label>
                                <Label>Email: {user.email} </Label>  
                            </Data>
                        </UserInfo>
                        <Second>
                            
                                <Form onSubmit={handleSubmit}>
                                    {message && <Alert>{message}</Alert>}
                                    {error && <Alert>{error}</Alert>}
                                    <FormLabel id="name">Full Name</FormLabel>
                                    <FormInput type='text' ref={nameRef}/>
                                    <FormLabel id="email">Email</FormLabel>
                                    <FormInput type='email' ref={emailRef} placeholder="Leave blank to keep the same" />
                                    <FormLabel id="password">Password</FormLabel>
                                    <FormInput type="password" ref={passwordRef} placeholder="Leave blank to keep the same"  />
                                    <FormLabel id="password-confirm">Password confirmation</FormLabel>
                                    <FormInput type="password" ref={passwordConfirmRef} placeholder="Leave blank to keep the same"  />
                                    <NavBtnLink disabled={loading} type="submit">Update Info</NavBtnLink>
                                </Form>
                             
                        </Second> 
                    </SecondaryContainer>
                </MainContainer>
        </>
    )
}


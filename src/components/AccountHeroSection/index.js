import React, {useRef, useState} from 'react'
import {MainContainer, TextH1, Second, Label, Data , UserInfo, Form, Alert, NavBtnLink,
       FormLabel, FormInput, SecondaryContainer, AvatarContainer} from './AccountHeroElements'
import {Avatar, TextH2} from '../SecondarySidebar/SecondarySidebarElements'
import { useAuth } from "../../context/AuthContext"
import {useHistory} from 'react-router-dom'

const AccountHeroSection = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updatePassword, updateEmail } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
  
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
  
      if(passwordRef.current.value) {
          promises.push(updatePassword(passwordRef.current.value))
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
                                <TextH2>Leigh Anne</TextH2> 
                            </AvatarContainer>
                            <Data>
                                <Label>Full Name: </Label>
                                <Label>Email: {currentUser.email}</Label>  
                            </Data>
                        </UserInfo>
                        <Second>
                            
                                <Form onSubmit={handleSubmit}>
                                    {message && <Alert>{message}</Alert>}
                                    {error && <Alert>{error}</Alert>}
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

export default AccountHeroSection

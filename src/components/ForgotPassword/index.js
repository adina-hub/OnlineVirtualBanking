import React, {useRef, useState} from 'react'
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, Text, NavBtnLink} from '../Signin/SigninElements'
import {Link, useHistory} from 'react-router-dom'
import {Alert} from '../Signup/SignupElements'
import { useAuth } from "../../context/AuthContext"


export default function PasswordReset() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
  
    async function handleSubmit(e) {
      e.preventDefault()
  
      try {
        setMessage("")
        setError("")
        setLoading(true)
        await resetPassword(emailRef.current.value)
        setMessage("Check your inbox for further instructions")
        // history.push('/signin')
      } catch {
        setError("Failed to reset password")
      }
  
      setLoading(false)
    }

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">dolla</Icon>
                    <FormContent>
                        <Form onSubmit={handleSubmit}>
                            <FormH1>Password reset</FormH1>
                            {error && <Alert>{error}</Alert>}
                            {message && <Alert variant="success">{message}</Alert>}
                            <FormLabel id="email">Email</FormLabel>
                            <FormInput type='email' ref={emailRef} required />
                            <NavBtnLink type="submit" disabled={loading}>Reset Password</NavBtnLink>
                            <Text> <Link to='/signup'>Log In</Link></Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

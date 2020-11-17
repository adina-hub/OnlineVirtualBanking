import React, { useRef, useState } from "react"
import { Alert } from "./Signup/SignupElements"
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, Text, NavBtnLink} from './Signin/SigninElements'
import { useAuth } from "../context/AuthContext"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
  
    async function handleSubmit(e) {
      e.preventDefault()
  
      try {
        setMessage("")
        setError("")
        setLoading(true)
        await resetPassword(emailRef.current.value)
        setMessage("Check your inbox for further instructions")
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
                            <FormH1>Password Reset</FormH1>
                            {error && <Alert>{error}</Alert>}
                            {message && <Alert>{message}</Alert>}
                            <FormLabel id="email">Email</FormLabel>
                            <FormInput type='email' ref={emailRef} required />
                            <NavBtnLink type="submit" disabled={loading}>Reset Password</NavBtnLink>
                            <Link to='/signin'>Login</Link>
                            <Text>Need an account? <Link to='/signup'>Sign Up</Link></Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
      </>
    )
  }
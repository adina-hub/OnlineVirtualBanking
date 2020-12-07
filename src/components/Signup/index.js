import React, { useRef, useState } from "react"
import {FormH1, FormLabel, FormInput, FormWrap, Icon, Text, FormContent, Container} from '../Signin/SigninElements'
import {NavBtnLink, Alert, Form} from './SignupElements'
import { useAuth } from "../../context/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Signup() {
  const emailRef = useRef()
  const nameRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value, nameRef.current.value)
      history.push("/signin")
    } catch {
      setError("Failed to create an account")
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
                            <FormH1>Register a new account</FormH1>
                            {error && <Alert>{error}</Alert>}
                            <FormLabel id="email">Email</FormLabel>
                            <FormInput type='email' ref={emailRef} required />
                            <FormLabel id="text">Name</FormLabel>
                            <FormInput type='text' ref={nameRef} required />
                            <FormLabel id="password">Password</FormLabel>
                            <FormInput type="password" ref={passwordRef} required />
                            <FormLabel id="password-confirm">Password confirmation</FormLabel>
                            <FormInput type="password" ref={passwordConfirmRef} required />
                            <NavBtnLink disabled={loading} type="submit">Register</NavBtnLink>
                            <Text>Already have an account? <Link to="/signin">Log In</Link></Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
    </>
  )
}
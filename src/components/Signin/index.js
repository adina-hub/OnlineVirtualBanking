import React, {useRef, useState} from 'react'
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, Text, NavBtnLink} from './SigninElements'
import {Link, useHistory} from 'react-router-dom'
import {Alert} from '../Signup/SignupElements'
import { useAuth } from "../../context/AuthContext"

export default function SignIn() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
        setError("")
        setLoading(true)
        await login(emailRef.current.value, passwordRef.current.value)
        history.push("/account")
        } catch {
        setError("Failed to log in")
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
                            <FormH1>Sign in to your account</FormH1>
                            {error && <Alert>{error}</Alert>}
                            <FormLabel id="email">Email</FormLabel>
                            <FormInput type='email' ref={emailRef} required />
                            <FormLabel id="password">Password</FormLabel>
                            <FormInput type="password" ref={passwordRef} required />
                            <NavBtnLink type="submit" disabled={loading}>Sign In</NavBtnLink>
                            <Link to='/forgot-password'>Forgot password?</Link>
                            <Text>Need an account? <Link to='/signup'>Sign Up</Link></Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

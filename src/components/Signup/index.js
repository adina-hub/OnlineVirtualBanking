import React from 'react'
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormInput, FormButton} from './SignupElements'

const SignUp = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">dolla</Icon>
                    <FormContent> 
                        <Form action="#">
                            <FormH1>Register a new account</FormH1>
                            <FormInput type='text'  placeholder="FullName" required />
                            <FormInput type='text' placeholder="Email" required />
                            <FormInput type='password' placeholder="Password" required />
                            <FormInput type='password' placeholder="Confirm password" required />
                            <FormButton type='submit'>Continue</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignUp

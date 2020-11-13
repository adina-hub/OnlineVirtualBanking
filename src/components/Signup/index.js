import React from 'react'
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormInput, FormButton,
       DataContainer} from './SignupElements'

const SignUp = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">dolla</Icon>
                    <FormContent> 
                        <Form action="#">
                            <FormH1>Register a new account</FormH1>
                            <DataContainer>
                                <FormInput type='text'  placeholder="First Name" required />
                                <FormInput type='text' placeholder="Last Name" required />
                            </DataContainer>
                            <DataContainer>
                                <FormInput type='text' placeholder="Address" required />
                                <FormInput type='text' placeholder="Phone number" required />
                            </DataContainer>
                            <DataContainer>
                                <FormInput type='email' placeholder="Email" required />
                                <FormInput type='password' placeholder="Password" required />
                            </DataContainer>
                            <FormButton type='submit'>Continue</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignUp

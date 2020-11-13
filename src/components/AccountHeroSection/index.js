import React from 'react'
import {MainContainer, TextH1, SecondaryContainer,
        Data, UpdateButton, Label, FormInput, UpdateContainer, TextH4} from './AccountHeroElements'
import {Avatar, TextH2, UserInfo} from '../SecondarySidebar/SecondarySidebarElements'

const AccountHeroSection = () => {

    return (
        <>
                <MainContainer>
                    <TextH1>Account</TextH1>
                    <SecondaryContainer>
                       <UserInfo>
                           <Avatar></Avatar>
                           <UpdateContainer>
                               <TextH2>Leigh Anne</TextH2>
                               <TextH4>Update Photo</TextH4>
                           </UpdateContainer>
                       </UserInfo>
                       <UpdateButton>Update Info</UpdateButton>
                    </SecondaryContainer>
                    <Data action="#">
                        <Label>Full Name</Label>
                        <FormInput type='text' value='Leigh Anne' />
                        <Label>Email</Label>
                        <FormInput type='email' value='anne.leigh@gmail.com' />
                        <Label>Password</Label>
                        <FormInput type='text' value='thisIsMyPassword80' />
                    </Data>
                </MainContainer>
        </>
    )
}

export default AccountHeroSection

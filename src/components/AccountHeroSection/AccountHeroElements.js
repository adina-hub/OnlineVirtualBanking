import styled from 'styled-components'

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0; 
    top: 0;
    left: 0;
    right: 0;
    z-index: 0;
    overflow: hidden;
    display: flex;
    flex-direction: row; 
`

export const MainContainer = styled.div`
    background-color: #fff;
    flex: 0.8;
    display: flex;
    flex-direction: column;
`

export const TextH1 = styled.h1`
    font-size: 30px;
    color: #000;
    padding: 50px 70px;
`

export const SecondaryContainer = styled.div`
    display: flex;
    margin-top: 20px;
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 70px;
    width: 600px;
`

export const AvatarContainer = styled.div`
    display: flex;
    align-items: center;
`

export const Data = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 80px;
`

export const Label = styled.h3`
    margin-bottom: 35px;
    font-size: 14px;
    color: #000;
`


export const Second = styled.div`
    width: 400px;
`

export const Form = styled.form`
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 60px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`

export const Alert = styled.div`
    padding: 15px;
    background-color: #d32f2f; 
    color: black;
    margin-bottom: 15px;
    height: 45px;
    border-radius: 4px;
`

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: black;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #000;
`

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: 1px solid #D3D3D3;
    border-radius: 4px;
`

export const NavBtnLink = styled.button`
    background: #01bf71;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
`
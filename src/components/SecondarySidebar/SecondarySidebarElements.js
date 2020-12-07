import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom'
import img from '../../images/avatar.jpg'

export const SidebarNavbar = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(108deg, rgba(1, 147, 86, 1) 0%, rgba(10, 201, 122, 1) 100%);
    flex: 0.27;

`

export const UserInfo = styled.div`
    margin: 60px 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Avatar = styled.image`
    vertical-align: middle;
    width: 60px;
    height: 60px;
    border-radius: 50%; 
    background-image: url(${img});
    background-position: center;
    background-size: cover;
`

export const TextH2 = styled.h2`
    margin-left: 20px;
    font-size: 20px;
    color: #000000;
`

export const Balance = styled.div`
    display: flex; 
    flex-direction: column;
    padding-left: 20px;
`

export const Text = styled.h3`
    font-size: 23px;
    font-weight: 600;
    color: #fff;
    margin: 10px 0 10px 20px;
`

export const NavbarMenu = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 60px;
`

export const NavbarElement = styled.div`
    display: flex;
    padding-bottom: 20px;
    padding-top: 20px;
    transition: 0.3s ease-in-out;

    &:hover {
        background: #F5F5F5;
    }
`

export const NavbarText = styled.button`
    padding: 16px 40px;
    text-decoration: none;
    color: 	#000000;
    border: none;
    font-size: 20px;
    cursor: pointer;
    background: transparent;
    outline: none;
`

export const NavbarIcons = styled.div`
    display: flex;
    flex-direction: column;
`

export const NavbarIcon = styled(LinkR)`
    color: #000000;
    font-size: 24px;
    padding: 16px 40px;
`

export const TextH1 = styled.h1`
    font-size: 30px;
    color: #000;
    padding: 70px;
`

export const SecondaryContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 30px;
    width: 900px;
`

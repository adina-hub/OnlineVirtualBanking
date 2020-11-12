import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom'

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

export const SidebarContainer = styled.div`
    background-color: #C0C0C0;
    flex: 0.2;
`

export const MainContainer = styled.div`
    background-color: #fff;
    flex: 0.8;
`

export const SidebarNavbar = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`

export const UserInfo = styled.div`
    margin: 40px 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Avatar = styled.image`
    vertical-align: middle;
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

export const Text = styled.h2`
    margin-left: 20px;
    font-size: 16px;
    color: #000000;
`

export const NavbarMenu = styled.div`
    display: flex;
    flex-direction: row;
`

export const NavbarElements = styled.div`
    display: flex;
    flex-direction: column;
`

export const NavbarElement = styled(LinkR)`
    padding: 16px 40px;
    text-decoration: none;
    color: 	#000000;
    border: none;
    font-size: 20px;
    cursor: pointer;
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
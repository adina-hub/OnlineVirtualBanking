import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;
    padding-left: 32px;
    padding-top: 32px;
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(108deg, rgba(1, 147, 86, 1) 0%, rgba(10, 201, 122, 1) 100%);
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

export const Alert = styled.div`
    padding: 15px;
    background-color: #d32f2f; 
    color: white;
    margin-bottom: 15px;
    height: 45px;
    border-radius: 4px;
`

export const Form = styled.form`
    background: #010101;
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

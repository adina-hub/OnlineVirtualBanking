import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MainContainer = styled.div`
    background-color: #fff;
    flex: 0.8;
    display: flex;
    flex-direction: column;
`

export const TextH1 = styled.h1`
    font-size: 30px;
    color: #000;
    margin-top: 50px;
    margin-left: 70px;
`

export const NewTransaction = styled.div`
    display: flex;
    align-items: center;
    width: 500px;
    margin-left: 70px;
    margin-top: 40px;
`

export const Button = styled(Link)`
    font-size: 31px;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    color: #228B22;
    border: 2px solid #228B22;
    text-decoration: none;
    text-align: center;

    &:hover {
        background: #228B22;
        color: #fff;
    }
`

export const ButtonText = styled.h3`
    font-size: 16px;
    color: #000;
    margin-left: 30px;
`

export const Text = styled.h2`
    font-size: 22px;
    font-weight: 400;
    margin-top: 40px;
    margin-left: 70px;
`

export const HR = styled.div`
    width: 500px;
    height: 1px;
    margin-left: 70px;
    margin-top: 17px;
    background: #000;
`

export const Transactions = styled.div`
    display: flex;
    flex-direction: column;
    width: 700px;
    margin-left: 70px;
`

export const Transaction = styled.div`
    display: flex;
    align-items: center;
    margin-top: 40px;
    justify-content: space-between;
`

export const Details = styled.div`
    display: flex;
    flex-direction: column;
`

export const Name = styled.h3`
    font-size: 18px;
    color: #000;
`

export const Date = styled.div`
    font-size: 12px;
    color: #000;
`

export const Sum = styled.div`
    font-size: 18px;
    color: #000;
`

export const EditIcon = styled(Link)`
    color: #000;

    &:hover {
        color: #228B22;
    }
`
import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom'

export const MainContainer = styled.div`
    background-color: #fff;
    flex: 0.8;
    display: flex;
    flex-direction: column;
`

export const TextH1 = styled.h1`
    font-size: 30px;
    color: #000;
    padding: 70px;
`

export const TextH2 = styled.h2`
    padding: 10px 70px;
    font-size: 20px;
    color: #000000;
`

export const CardsContainer = styled.div`
    display: flex;
    margin-left: 70px;
    width: 1000px;
    justify-content: space-evenly;
`

export const Card = styled.div`
    display: flex; 
    flex-direction: column;
    height: 600px;
    width: 300px;
    align-items: center;
    margin-top: 40px;
`

export const Icon = styled.img`
    width: 300px;
    height: 190px;
    border-radius: 7px;
    margin-bottom: 30px;

    &:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        margin-top: -12px;
        cursor: pointer;
    }
`

export const Text = styled.h3`
    font-size: 15px;
    color: #000;
`

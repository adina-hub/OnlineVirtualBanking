import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
`

export const LeftContainer = styled.div`
    flex: 0.4;
    display: flex;
    flex-direction: column;
    margin-left: 120px;
`

export const RightContainer = styled.div`
    flex: 0.6;
    display: flex;
    flex-direction: column;
    height: 450px;
    border-left: 1px solid #C0C0C0;
    padding-top: 60px;
    padding-left: 60px;
`

export const Card = styled.div`
    display: flex; 
    flex-direction: column;
    height: 270px;
    width: 300px;
    align-items: center;
    margin-top: 60px;
`

export const Icon = styled.img`
    width: 300px;
    height: 190px;
    border-radius: 7px;
    margin-bottom: 30px;
`

export const Date = styled.h3`
    font-size: 15px;
    font-weight: 200;
`

export const ExpirationDate = styled.div`
    display: flex;
    width: 300px;
    justify-content: space-between;
`

export const Label = styled.h3`
    font-size: 17px;
`

export const Iban = styled.div`
    width: 350px;
    height: 60px;
    background: #D3D3D3;
    border-radius: 5px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    padding-top: 6px;
`

export const Cvv = styled.div`
    width: 150px;
    height: 60px;
    background: #D3D3D3;
    border-radius: 5px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    padding-top: 6px;
`

export const MoneyContainer = styled.div`
    display: flex;
    margin-top: 20px;
`

export const Sum = styled.p`
    display: flex;
    flex-direction: column;
    flex: 0.3;
    text-align: center;
`

export const TextH3 = styled.h3`
    font-size: 15px;
    color: #000;
    font-weight: 600;
`

export const Text = styled.h2`
    font-size: 22px;
    padding-top: 8px;
    color: #000000;
    letter-spacing: 2px;
`

export const SumText = styled.h3`
    font-size: 20px;
    margin-bottom: 10px;
`
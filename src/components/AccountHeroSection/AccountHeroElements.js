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

export const SecondaryContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 30px;
    width: 900px;
`

export const UpdateButton = styled(LinkR)`
    width: 150px;
    height: 45px;
    border: 2px solid #228B22;
    border-radius: 5px;
    color: #228B22;
    text-decoration: none;
    font-size: 18px;
    padding: 10px 25px;

    &:hover {
        background: #228B22;
        color: #fff;
    }
`

export const Data = styled.form`
    display: flex;
    flex-direction: column;
    padding-left: 70px;
    width: 900px;
`

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border-radius: 4px;
    border: 2px solid #000;
    width: 400px;
`

export const Label = styled.h3`
    margin-bottom: 10px;
    font-size: 14px;
    color: #000;
`

export const UpdateContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const TextH4 = styled(LinkR)`
    font-size: 10px;
    padding-left: 20px;
    padding-top: 10px;
    color: #228B22;
`
import styled from 'styled-components'

export const MainContainer = styled.div`
    background-color: #fff;
    flex: 0.8;
    display: flex;
    flex-direction: column;
`

export const FormH1 = styled.h1`
    font-size: 28px;
    color: #000;
    padding-left: 70px;
    padding-top: 80px;
    padding-bottom: 80px;
    
`

export const Form = styled.form`
    max-width: 400px;
    height: auto;
    z-index: 1;
    display: grid;
    margin: 0;
    margin-left: 200px;
    
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

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #000;
`

export const FormInput = styled.input`
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #D3D3D3;
    border-radius: 4px;
`

export const NavBtnLink = styled.button`
    background: #01bf71;
    padding: 10px 0;
    margin: 40px auto;
    width: 150px;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
`
export const SelectContainer = styled.div`
    display: flex;
    align-items: center;
`

export const Select = styled.select`
  width: 100px;
  height: 35px;
  background: white;
  color: gray;
  border: 1px solid #D3D3D3;
  border-radius: 4px;
  padding-left: 5px;
  font-size: 14px;
  margin-left: 50px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
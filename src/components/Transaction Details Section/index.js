import React from 'react'
import { MainContainer, TextH1 } from '../AccountHeroSection/AccountHeroElements'
import {Info, Label, Value} from './TransactionDetailsElements'
import { useParams } from 'react-router-dom';

const TransactionDetails = () => {
    const url = useParams();
    console.log(url.id)
    return (
        <MainContainer>
            <TextH1>Transactions</TextH1>
            <Info>
                <Label>Transaction Id:</Label>
                <Value>#2752288</Value> 
            </Info>
            <Info>
                <Label>From:</Label>
                <Value>2523 2563 0003 2555</Value> 
            </Info>
            <Info>
                <Label>To:</Label>
                <Value>1113 9725 0203 2555</Value> 
            </Info>
            <Info>
                <Label>Date:</Label>
                <Value>13 Sep 2020 at 11:15 AM</Value> 
            </Info>
            <Info>
                <Label>Value:</Label>
                <Value>100$</Value> 
            </Info>
        </MainContainer>
    )
}

export default TransactionDetails

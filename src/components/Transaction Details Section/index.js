import React, {useEffect, useState} from 'react'
import { MainContainer, TextH1 } from '../AccountHeroSection/AccountHeroElements'
import {Info, Label, Value} from './TransactionDetailsElements'
import { useParams } from 'react-router-dom';
import firebase from 'firebase'


const TransactionDetails = () => {
    const url = useParams();
    var id = url.id;
    const [trans, setTrans] = useState('')

    useEffect(() => {
        async function getTrans() {
            const snap = await firebase.database().ref('Transaction/' + id).once("value")
            var childData = snap.val();
            setTrans(childData);
        }
        getTrans()
    }, []);
    return (
        <MainContainer>
            <TextH1>Transactions</TextH1>
            <Info>
                <Label>Transaction Id:</Label>
                <Value>{id}</Value> 
            </Info>
            <Info>
                <Label>From:</Label>
                <Value>{trans.from}</Value> 
            </Info>
            <Info>
                <Label>To:</Label>
                <Value>{trans.to}</Value> 
            </Info>
            <Info>
                <Label>Date:</Label>
                <Value>{trans.date}</Value> 
            </Info>
            <Info>
                <Label>Value:</Label>
                <Value>{trans.value} {trans.currency}</Value> 
            </Info>
        </MainContainer>
    )
}

export default TransactionDetails

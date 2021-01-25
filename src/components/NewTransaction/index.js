import React, {useRef, useState, useEffect} from 'react'
import {MainContainer, Form, NavBtnLink, FormLabel, FormInput, FormH1, Select, SelectContainer} from './NewTransactionElements'
import firebase from 'firebase'
import { auth } from '../../firebase'
import { useHistory } from "react-router-dom"

export default function NewTransactionSection() {
    const toRef = useRef()
    const fromRef = useRef()
    const valueRef = useRef()
    const titleRef = useRef()
    const selected = useRef()
    const history = useHistory()

    const [card, setCard] = useState('')

    useEffect(() => {
        async function getCard() {
            const snap = await firebase.database().ref('Card/' + auth.currentUser.uid).once("value")
            var childData = snap.val();
            setCard(childData);
        }
        getCard()
    }, []);


    function createTransaction(title, to, from, value, currency) {
        firebase.database().ref('Transaction').push({
            customerId: auth.currentUser.uid,
            title: title,
            from: to,
            to: from,
            value: value,
            currency: currency,
            date: new Date(firebase.firestore.Timestamp.now().seconds*1000).toLocaleDateString()
        })
    }

    async function modifySold(value){
        var sold = parseInt(card.Sold);
        var val = parseInt(value);
        var newSold = sold - val;
        firebase.database().ref('Card/' + auth.currentUser.uid).update({Sold: String(newSold)}); 
    }

    async function handleSubmit(e) {
        e.preventDefault()
        
    
        try {
          createTransaction(titleRef.current.value, fromRef.current.value, toRef.current.value, valueRef.current.value, selected.current.value)
          modifySold(valueRef.current.value)
          history.push("/transactions")
        } catch {

        }
      }

    return (
        <MainContainer>
            <Form onSubmit={handleSubmit}>
                <FormH1>Add a new transaction</FormH1>
                <FormLabel id="title">Title</FormLabel>
                <FormInput type='text' ref={titleRef} required />
                <FormLabel id="from">From</FormLabel>
                <FormInput type='text' ref={fromRef} value={card.IBAN}/>
                <FormLabel id="to">To</FormLabel>
                <FormInput type='text' ref={toRef} required />
                <FormLabel id="value">Value</FormLabel>
                <FormInput type='number' ref={valueRef} required />
                <SelectContainer>
                    <FormLabel id="currency">Currency</FormLabel>
                    <Select ref={selected}>
                        <option value="lei">Lei</option>
                        <option value="euro">Euro</option>
                        <option value="pounds">Pounds</option>
                    </Select>
                </SelectContainer>
                <NavBtnLink type="submit">Add</NavBtnLink>            
            </Form>   
        </MainContainer>
    )
}


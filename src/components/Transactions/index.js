import React, { useEffect, useState } from 'react'
import {FaEllipsisV, FaPlus} from 'react-icons/fa'
import {MainContainer, TextH1, NewTransaction, Button, ButtonText, Text, HR, Transactions, Transaction, Details,
        Name, Date, Sum, EditIcon} from './TransactionElements'
import firebase from 'firebase'
import { auth } from '../../firebase'


export default function TransactionsSection() {
    const [transactions, setTransactions] = useState([])
    useEffect(() => {
        async function getTransactions() {
            var array = []
            await firebase.database().ref('Transaction').orderByChild("customerId").equalTo(auth.currentUser.uid).once("value").then((snapshot) => {
                        snapshot.forEach(function(childSnapshot) {
                            var childData = childSnapshot.val();
                            var form = {
                                id: childSnapshot.key,
                                title: childData.title,
                                from: childData.from,
                                to: childData.to,
                                value: childData.value,
                                date: childData.date,
                                currency: childData.currency
                            }
                            array.push(form)
                        });
                        setTransactions(array);   
            });
        };
        getTransactions()
    }, [])

    function displayTrans(transactions) {
        let arrayy = [];
        for(let i=0; i<transactions.length; i++){
            arrayy.push(
                <Transaction>
                    <Details>
                        <Name>{transactions[i].title}</Name>
                        <Date>{transactions[i].date}</Date> 
                    </Details>
                    <Sum>{transactions[i].value} {transactions[i].currency}</Sum>
                    <EditIcon to={'/transactionDetails/' + transactions[i].id}><FaEllipsisV /></EditIcon>
                </Transaction>
            );
        }
        return arrayy;
    }
    var list = displayTrans(transactions);
    return (
        <MainContainer>
            <TextH1>Transactions</TextH1>
            <NewTransaction>
                <Button to='/new-transaction'><FaPlus /></Button>
                <ButtonText>New Transaction</ButtonText>
            </NewTransaction>
            <Text>History</Text>
            <HR />
            <Transactions>
                {list}
            </Transactions>
        </MainContainer>
    )
}
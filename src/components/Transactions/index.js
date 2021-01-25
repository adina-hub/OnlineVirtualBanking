import React, { useEffect, useState } from 'react'
import {FaEllipsisV, FaPlus} from 'react-icons/fa'
import {MainContainer, TextH1, NewTransaction, Button, ButtonText, Text, HR, Transactions, Transaction, Details,
        Name, Date, Sum, EditIcon} from './TransactionElements'
import firebase from 'firebase'


export default function TransactionsSection() {
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        async function getTransactions() {
            var array = []
            await firebase.database().ref('Transaction').once("value").then((snapshot) => {
                        snapshot.forEach(function(childSnapshot) {
                            var childData = childSnapshot.val();
                            var form = {
                                id: childSnapshot.key,
                                title: childData.title,
                                from: childData.from,
                                to: childData.to,
                                value: childData.value,
                                date: childData.date
                            }
                            array.push(form)
                        });
                        setTransactions(array);   
            });
        };
        getTransactions()
    }, [])
    console.log(transactions);
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
                <Transaction>
                    <Details>
                        <Name>Amazon Support</Name>
                        <Date>13 Sep 2020 at 15:45 PM</Date> 
                    </Details>
                    <Sum>-2,320$</Sum>
                    <EditIcon to='/transactionDetails'><FaEllipsisV /></EditIcon>
                </Transaction>
                <Transaction>
                    <Details>
                        <Name>Roland GmbH</Name>
                        <Date>11 Sep 2020 at 11:25 AM</Date> 
                    </Details>
                    <Sum>+500$</Sum>
                    <EditIcon to='/transactionDetails'><FaEllipsisV /></EditIcon>
                </Transaction>
            </Transactions>
        </MainContainer>
    )
}


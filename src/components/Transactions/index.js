import React from 'react'
import {FaEllipsisV} from 'react-icons/fa'
import {MainContainer, TextH1, NewTransaction, Button, ButtonText, Text, HR, Transactions, Transaction, Details,
        Name, Date, Sum, EditIcon} from './TransactionElements'

const TransactionsSection = () => {
    return (
        <MainContainer>
            <TextH1>Transactions</TextH1>
            <NewTransaction>
                <Button>+</Button>
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

export default TransactionsSection
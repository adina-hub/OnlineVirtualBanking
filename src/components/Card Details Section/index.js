import React from 'react'
import {MainContainer, TextH1, TextH2} from '../../components/Cards Section/CardsSectionElements'
import {Container, LeftContainer, RightContainer, Card, Icon, Label, Date, ExpirationDate, Iban, Cvv,
       MoneyContainer, Sum, TextH3, Text, SumText} from './CardDetailsElements'
import img from '../../images/card.svg'

const CardDetailsSection = () => {
    return (
        <MainContainer>
            <TextH1>Cards</TextH1>
            <TextH2>Active cards</TextH2>
            <Container>
                <LeftContainer>
                    <Card>
                        <Icon src={img} />
                    </Card>
                    <ExpirationDate>
                        <Label>Expiration Date:</Label>
                        <Date>13 Sep 2022</Date>
                    </ExpirationDate>
                </LeftContainer>
                <RightContainer>
                    <Iban>
                        <TextH3>IBAN</TextH3>
                        <Text>1263 2645 2653 0000</Text>
                    </Iban>
                    <Cvv>
                        <TextH3>CVV</TextH3>
                        <Text>597</Text>
                    </Cvv>
                    <MoneyContainer>
                        <Sum>
                            <SumText>Available</SumText>
                            <SumText>$25,275.87</SumText>
                        </Sum>
                        <Sum>
                            <SumText>Limit</SumText>
                            <SumText>$100,000.87</SumText>
                        </Sum>
                    </MoneyContainer>
                </RightContainer>
            </Container>
        </MainContainer>
    )
}

export default CardDetailsSection

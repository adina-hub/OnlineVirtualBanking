import React, {useState, useEffect} from 'react'
import {MainContainer, TextH1, TextH2} from '../../components/Cards Section/CardsSectionElements'
import {Container, LeftContainer, RightContainer, Card, Icon, Label, Date, ExpirationDate, Iban, Cvv,
       MoneyContainer, Sum, TextH3, Text, SumText} from './CardDetailsElements'
import img from '../../images/card.svg'
import { useParams } from 'react-router-dom';
import firebase from 'firebase'

const CardDetailsSection = () => {
    const url = useParams();
    var id = url.id;

    const [card, setCard] = useState('')

    useEffect(() => {
        async function getCard() {
            const snap = await firebase.database().ref('Card/' + id).once("value")
            var childData = snap.val();
            setCard(childData);
        }
        getCard()
    }, []);
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
                        <Date>{card.ExpDate}</Date>
                    </ExpirationDate>
                </LeftContainer>
                <RightContainer>
                    <Iban>
                        <TextH3>IBAN</TextH3>
                        <Text>{card.IBAN}</Text>
                    </Iban>
                    <Cvv>
                        <TextH3>CVV</TextH3>
                        <Text>{card.CVV}</Text>
                    </Cvv>
                    <MoneyContainer>
                        <Sum>
                            <SumText>Available</SumText>
                            <SumText>{card.Sold} lei</SumText>
                        </Sum>
                    </MoneyContainer>
                </RightContainer>
            </Container>
        </MainContainer>
    )
}

export default CardDetailsSection

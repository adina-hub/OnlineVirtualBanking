import React, {useState, useEffect} from 'react'
import {MainContainer, TextH1, TextH2, CardsContainer, Card, Icon, Text} from './CardsSectionElements'
import img from '../../images/card.svg'
import { auth } from '../../firebase'
import firebase from 'firebase'


const CardsSection = () => {
    const [card, setCard] = useState('')

    useEffect(() => {
        async function getCard() {
            const snap = await firebase.database().ref('Card/' + auth.currentUser.uid).once("value")
            var childData = snap.val();
            setCard(childData);
        }
        getCard()
    }, []);

    return (
        <MainContainer>
            <TextH1>Cards</TextH1>
            <TextH2>Active cards</TextH2>
            <CardsContainer>
                <Card>
                    <Icon src={img} />
                    <Text to={'/cardDetails/' + auth.currentUser.uid}>{card.Type}</Text>
                </Card>
            </CardsContainer>
        </MainContainer>
    )
}

export default CardsSection

import React from 'react'
import {MainContainer, TextH1, TextH2, CardsContainer, Card, Icon, Text} from './CardsSectionElements'
import img from '../../images/card.svg'

const CardsSection = () => {
    return (
        <MainContainer>
            <TextH1>Cards</TextH1>
            <TextH2>Active cards</TextH2>
            <CardsContainer>
                <Card>
                    <Icon src={img} />
                    <Text>Mastercard Gold</Text>
                </Card>
                <Card>
                    <Icon src={img} />
                    <Text>Visa</Text>
                </Card>
            </CardsContainer>
        </MainContainer>
    )
}

export default CardsSection

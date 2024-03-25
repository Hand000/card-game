import React from 'react';
import { CardData } from '../data/CardData';

interface CardProps extends CardData {

}

interface CardState {

}

export default class Card extends React.Component<CardProps, CardState> {
    constructor(props: CardProps){
        super(props);
    }
    
    render() {
        return <></>;
    }
}
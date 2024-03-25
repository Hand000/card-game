import React from 'react';
import Card from './Card';
import { CardData, CardSuit, CardNumber, cardIcon } from '../data/CardData';

import './style/deck.css';

interface DeckProps {
    deck: CardData[];
    dealt: CardData[];
}

interface DeckState {

}

export default class Deck extends React.Component<DeckProps, DeckState> {
    constructor(props: DeckProps){
        super(props);
    }
    
    render() {
        let displayCard: JSX.Element = this.props.dealt.length > 0 ? <div className='displayCard'>
            <div className='cardCount'><span>Dealt: </span>{this.props.dealt.length}</div>
            <div id="cardIcon"> { this.props.dealt[this.props.dealt.length - 1].num } </div>
            {cardIcon(this.props.dealt[this.props.dealt.length - 1].suit)}
        </div>: <></>;

        return (
            <div id='cardContainer'>
                <div id='deck'>
                    <div className='cardCount'><span>Deck: </span>{this.props.deck.length}</div>
                    <img className="displayCard" src={require('./card-back.png')}/>
                </div>
                <div id='dealt'>
                    { displayCard }
                </div>
            </div>
        );
    }
}
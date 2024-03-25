import React from 'react';
import { CardData, CardSuit, CardNumber } from '../data/CardData';
import Toolbar from './Toolbar';
import Deck from './Deck';
import './style/game.css';

interface GameProps {

}

interface GameState {
    deck: CardData[];
    dealt: CardData[];
}

export default class Game extends React.Component<GameProps, GameState> {
    constructor(props: GameProps){
        super(props);

        this.state = {
            deck: this.generateDeck(),
            dealt: []
        }

        this.shuffle = this.shuffle.bind(this);
        this.deal = this.deal.bind(this);
        this.reset = this.reset.bind(this);
    }
    
    render() {
        return (
            <div id='gameScreen'>
                <Deck 
                    deck={this.state.deck}
                    dealt={this.state.dealt}/>
                <Toolbar 
                    isDealt={this.state.dealt.length == 0} 
                    shuffle={this.shuffle}
                    deal={this.deal}
                    reset={this.reset}/>
            </div>
        );
    }
    /**
     * Generates a deck of cards.
     * @returns Generated deck
     */
    generateDeck(): CardData[] {
        let deck: CardData[] = [];
        for (let i in Object.values(CardSuit)) {
            const suit: CardSuit = Object.keys(CardSuit)[i] as CardSuit;
            for (let j: CardNumber = 1; j <= 13; j++) {
                deck.push({ suit: suit, num: j as CardNumber })
            }
        }

        console.log(deck);

        return deck;
    }

    /**
     * Deals a card from the 'top' of the deck.
     */
    deal(): void {
        let dealt = this.state.dealt;
        let deck = this.state.deck;
        
        let card: CardData | undefined = deck.pop();
        if (card != undefined) {
            dealt.push(card);
        }

        console.log(card, deck);

        this.setState({
            dealt: dealt,
            deck: deck
        })
    }

    /**
     * Shuffles the deck into a random order.
     * 
     */
    shuffle(): void {
        let deck = this.state.deck;
        let currentIndex = deck.length - 1;

        while (currentIndex >= 0) {
            let randIndex = Math.floor(Math.random() * currentIndex);
            let randCard = deck[randIndex];
            deck[randIndex] = deck[currentIndex];
            deck[currentIndex] = randCard;
            currentIndex--;
        }

        this.setState({
            ...this.state, 
            deck: deck
        });
    }

    reset(): void {
        let dealt = this.state.dealt;
        let deck = this.state.deck;

        deck = deck.concat(dealt);
        
        console.log(deck);
        
        this.setState({
            dealt: [],
            deck: deck
        })
    }
}
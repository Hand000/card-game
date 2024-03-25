export type CardNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

export enum CardSuit {
    Hearts = "Hearts", 
    Clubs = "Clubs",
    Diamonds = "Diamonds",
    Spades = "Spades"
}

export interface CardData {
    num: CardNumber,
    suit: CardSuit
}

export function cardIcon(suit: CardSuit): JSX.Element {
    switch(suit) {
        case("Hearts"):
            return <div className="redIcon">&#9829;</div>;
        case("Clubs"):
            return <div className="blackIcon">&#9827;</div>;
        case("Diamonds"):
            return <div className="redIcon">&#9830;</div>;
        case("Spades"):
            return <div className="blackIcon">&#9824;</div>;
        default:
            return <></>;
    }
}
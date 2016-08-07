import {Card} from './Card.js'

export class Hand extends Card{
    constructor(c, s){
        super();
        this.cards = [];
    }

    score(){
        return cards.reduce((aggregate, card) => aggregate + card.value());
    }

    addCard(card){
        this.cards.push(card);
    }

    print(){
        this.cards.forEach(card => card.print());
    }
}

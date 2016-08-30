import {
  Suit
} from './Suit.js';
import {
  Deck
} from './Deck.js';
import {
  BlackJackHand
} from './BlackJackHand.js';
import {
  BlackJackCard
} from './BlackJackCard.js';

export class BlackJackGameAutomator {
  constructor(numPlayers) {
    this.deck = undefined;

    this.hands = [];
    for (let i = 0; i < numPlayers; i++) {
      this.hands.push(new BlackJackHand());
    }
  }

  //underscore for psuedo private
  static get _HIT_UNTIL() {
    return 16;
  }

  dealInitial() {
    this.hands.forEach(hand => {
      let card1 = this.deck.dealCard();
      let card2 = this.deck.dealCard();
      if (card1 === null || card2 === null) {
        return false;
      }
      hand.addCard(card1);
      hand.addCard(card2);
    });
    return true;
  }

  getBlackJacks() {
    let winners = [];
    for (let i = 0; i < this.hands.length; i++) {
      if (this.hands[i].isBlackJack()) {
        winners.push(i);
      }
    }
    return winners;
  }

  playHandIndex(i) {
    let hand = this.hands[i];
    return this.playHand(hand);
  }

  playHand(hand) {
    while (hand.score() < this._HIT_UNTIL) {
      let card = this.deck.dealCard();
      if (card === null) {
        return false;
      }
      hand.addCard(card);
    }
    return true;
  }

  playAllHands() {
    this.hands.forEach(hand => {
      if (!this.playHand(hand)) {
        return false;
      }
    });
    return true;
  }

  getWinners() {
    let winners = [];
    let winningScore = 0;
    for (let i = 0; i < this.hands.length; i++) {
      let hand = this.hands[i];
      if (!hand.busted()) {
        if (hand.score() > winningScore) {
          winningScore = hand.score();
          winners = [];
          winners.push(i);
        } else if (hand.score() === winningScore) {
          winners.push(i);
        }
      }
    }
    return winners;
  }

  initializeDeck() {
    let cards = [];
    for (let i = 1; i <= 13; i++) {
      for (let j = 0; j <= 3; j++) {
        let suit = Suit.getSuitFromValue(j);
        let card = new BlackJackCard(i, suit);
        cards.push(card);
      }
    }

    this.deck = new Deck();
    this.deck.setDeckOfCards(cards);
    this.deck.shuffle();
  }

  printHandsAndScore() {
    this.hands.forEach((hand, i) => {
      process.stdout.write('Hand ' + i + ' (' + hand.score() + '): ');
      hand.print();
      console.log('');
    });
  }
}

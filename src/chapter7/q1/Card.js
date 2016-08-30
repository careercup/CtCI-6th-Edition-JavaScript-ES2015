import {
  Suit
} from './Suit.js';

export class Card {
  constructor(c, s) {
    this.available = true;
    this.faceValue = c;
    this.suit = s;
  }

  suit() {
    return this.suit;
  }

  isAvailable() {
    return this.available;
  }

  markUnavailable() {
    this.available = false;
  }

  markAvailable() {
    this.available = true;
  }
  print() {
    let faceValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    process.stdout.write(faceValues[this.faceValue - 1]);
    switch (this.suit) {
    case Suit.Club:
      process.stdout.write('c');
      break;
    case Suit.Heart:
      process.stdout.write('h');
      break;
    case Suit.Diamond:
      process.stdout.write('d');
      break;
    case Suit.Spade:
      process.stdout.write('s');
      break;
    }
    process.stdout.write(' ');
  }
}

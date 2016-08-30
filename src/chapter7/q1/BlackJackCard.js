import {
  Card
} from './Card.js';

export class BlackJackCard extends Card {
  constructor(c, s) {
    super(c, s);
  }

  value() {
    if (this.isAce()) {
      return 1;
    } else if (this.faceValue >= 11 && this.faceValue <= 13) {
      return 10;
    } else {
      return this.faceValue;
    }
  }

  minValue() {
    if (this.isAce()) {
      return 1;
    } else {
      return this.value();
    }
  }

  maxValue() {
    if (this.isAce()) {
      return 11;
    } else {
      return this.value();
    }
  }

  isAce() {
    return this.faceValue === 1;
  }

  isFaceCard() {
    return this.faceValue >= 11 && this.faceValue <= 13;
  }
}

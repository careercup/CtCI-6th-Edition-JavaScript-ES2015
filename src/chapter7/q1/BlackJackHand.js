import {
  Hand
} from './Hand.js';

export class BlackJackHand extends Hand {
  score() {
    let scores = this.possibleScores();
    let maxUnder = Number.MIN_VALUE;
    let minOver = Number.MAX_VALUE;
    for (let score of scores) {
      if (score > 21 && score < minOver) {
        minOver = score;
      } else if (score <= 21 && score > maxUnder) {
        maxUnder = score;
      }
    }
    return maxUnder === Number.MIN_VALUE ? minOver : maxUnder;
  }

  possibleScores() {
    let scores = [];
    if (this.cards.length === 0) {
      return scores;
    }
    for (let card of this.cards) {
      this.addCardToScoreList(card, scores);
    }
    return scores;
  }

  addCardToScoreList(card, scores) {
    if (scores.length === 0) {
      scores.push(0);
    }
    let length = scores.length;
    for (let i = 0; i < length; i++) {
      let score = scores[i];
      scores[i] = score + card.minValue();
      if (card.minValue() !== card.maxValue()) {
        scores.push(score + card.maxValue());
      }
    }
  }

  busted() {
    return this.score() > 21;
  }

  is21() {
    return this.score() === 21;
  }

  isBlackJack() {
    if (this.cards.length !== 2) {
      return false;
    }
    let first = this.cards[0];
    let second = this.cards[1];
    return (first.isAce() && second.isFaceCard()) || (second.isAce() && first.isFaceCard());
  }
}

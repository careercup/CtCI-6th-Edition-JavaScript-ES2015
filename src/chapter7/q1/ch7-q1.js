'use strict';

import {
  BlackJackGameAutomator
} from './BlackJackGameAutomator.js';

const numHands = 5;

let automator = new BlackJackGameAutomator(numHands);
automator.initializeDeck();

let success = automator.dealInitial();
if (!success) {
  console.log('Error. Out of cards.');
} else {
  console.log('-- Initial --');
  automator.printHandsAndScore();
  let blackjacks = automator.getBlackJacks();
  if (blackjacks.length > 0) {
    process.stdout.write('Blackjack at ');
    for (let i of blackjacks) {
      process.stdout.write(i + ', ');
    }
    console.log('');
  } else {
    success = automator.playAllHands();
    if (!success) {
      console.log('Error. Out of cards.');
    } else {
      console.log('\n-- Completed Game --');
      automator.printHandsAndScore();
      let winners = automator.getWinners();
      if (winners.length > 0) {
        process.stdout.write('Winners: ');
        for (let i of winners) {
          process.stdout.write(i + ', ');
        }
        console.log('');
      } else {
        console.log('Draw. All players have busted.');
      }
    }
  }
}

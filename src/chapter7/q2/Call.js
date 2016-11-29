import {Rank} from './Rank';

export class Call {
  constructor(c) {
    /* Minimal rank of employee who can handle this call. */
    this.rank = Rank.Responder;

    /* Person who is calling. */
    this.caller = c;

    /* Employee who is handling call. */
    this.handler;
  }

  /* Set employee who is handling call. */
  setHandler(e) {
    this.handler = e;
  }

  /* Play recorded message to the customer. */
  reply(message) {
    console.log(message);
  }

  getRank() {
    return this.rank;
  }

  setRank(r) {
    this.rank = r;
  }

  incrementRank() {
    if (this.rank === Rank.Responder) {
      this.rank = Rank.Manager;
    } else if (this.rank === Rank.Manager) {
      this.rank = Rank.Director;
    }
    return this.rank;
  }

  /* Disconnect call. */
  disconnect() {
    this.reply('Thank you for calling');
  }
}

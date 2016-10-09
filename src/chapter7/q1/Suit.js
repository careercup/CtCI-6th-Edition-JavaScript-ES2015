export const Suit = {
  Club : 0,
  Diamond : 1,
  Heart : 2,
  Spade : 3,
  getSuitFromValue: (value) => Suit[Object.keys(Suit).find(key => Suit[key] === value)]
};

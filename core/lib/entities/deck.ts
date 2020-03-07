import { Card, makeCard } from "./card";

export interface Deck {
  cards: Card[];
}

export const makeDeck = (deck: Deck): Deck => {
  const { cards } = deck;
  if (cards.length !== 10) {
    throw new Error("Deck must contain exactly 10 cards");
  }
  return Object.freeze({
    cards: cards.map(card => makeCard(card))
  });
};

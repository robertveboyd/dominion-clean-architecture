import { Card, Deck, IRepository } from "../entities";

import { cards } from "./inMemoryData";

export const makeRepository = (): IRepository => {
  const getCard = async (expansions: string[], deck: Deck): Promise<Card> => {
    const availableCards = cards.filter(
      (card: Card) =>
        expansions.includes(card.expansion) &&
        card.edition !== 1 &&
        !deck.cards.map(card => card.name).includes(card.name)
    );
    let randomCards = getRandomCards([...availableCards], 1);
    return randomCards[0];
  };
  const getDeck = async (expansions: string[]): Promise<Deck> => {
    const availableCards = cards.filter(
      (card: Card) => expansions.includes(card.expansion) && card.edition !== 1
    );
    let randomCards = getRandomCards([...availableCards], 10);
    return { cards: randomCards };
  };

  return Object.freeze({
    getCard,
    getDeck
  });
};

function getRandomCards(cards: Card[], n: number) {
  let shuffledCards = [...cards];
  for (let i = cards.length - 1; i > cards.length - n - 1; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
  }
  return shuffledCards.slice(cards.length - n);
}

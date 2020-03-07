import { Card, Deck, IRepository } from "../../lib/entities";
import { tenCardDeck, singleCard } from "../__fixtures__";

export const makeRepositoryMock = (): IRepository => {
  const delay = (ms: number) => {
    return new Promise(res => setTimeout(res, ms));
  };
  const getCard = async (expansions: string[], deck: Deck): Promise<Card> => {
    delay(50);
    return singleCard;
  };
  const getDeck = async (expansions: string[]): Promise<Deck> => {
    delay(50);
    return tenCardDeck;
  };
  return Object.freeze({
    getCard,
    getDeck
  });
};

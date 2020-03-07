import { Deck, Card, makeCard } from "../../lib/entities";
import { IBoundary } from "../../lib/useCases";
import { tenCardDeck, singleCard } from "../__fixtures__/";

export const makeInteractor = (): IBoundary => {
  const delay = (ms: number) => {
    return new Promise(res => setTimeout(res, ms));
  };
  const getDeck = async (expansions: string[]): Promise<Deck> => {
    delay(50);
    return tenCardDeck;
  };
  const getCard = async (expansions: string[], deck: Deck): Promise<Card> => {
    delay(50);
    return makeCard(singleCard);
  };
  return Object.freeze({
    getDeck,
    getCard
  });
};

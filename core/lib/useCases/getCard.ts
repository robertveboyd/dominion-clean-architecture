import { Card, Deck, makeCard, IRepository } from "../entities";

export const makeGetCard = (repository: IRepository) => async (
  expansions: string[],
  deck: Deck
): Promise<Card> => makeCard(await repository.getCard(expansions, deck));

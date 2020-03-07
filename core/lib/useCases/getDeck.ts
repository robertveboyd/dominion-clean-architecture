import { Deck, makeDeck, IRepository } from "../entities";

export const makeGetDeck = (repository: IRepository) => async (
  expansions: string[]
): Promise<Deck> => makeDeck(await repository.getDeck(expansions));

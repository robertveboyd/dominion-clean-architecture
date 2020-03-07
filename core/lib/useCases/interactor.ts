import { IRepository } from "../entities";
import { IBoundary } from "./IBoundary";
import { makeGetCard } from "./getCard";
import { makeGetDeck } from "./getDeck";

export const makeInteractor = (repository: IRepository): IBoundary => {
  return Object.freeze({
    getCard: makeGetCard(repository),
    getDeck: makeGetDeck(repository)
  });
};

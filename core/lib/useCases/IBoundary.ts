import { Card, Deck } from "../entities";

export interface IBoundary {
  getCard(expansions: string[], deck: Deck): Promise<Card>;
  getDeck(expansions: string[]): Promise<Deck>;
}

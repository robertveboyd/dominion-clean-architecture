import { Card } from "./card";
import { Deck } from "./deck";

export interface IRepository {
  getCard(expansion: string[], deck: Deck): Promise<Card>;
  getDeck(expansion: string[]): Promise<Deck>;
}

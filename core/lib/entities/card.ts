export interface Card {
  name: string;
  expansion: string;
  cost: number;
  edition?: number;
}

export const makeCard = (card: Card): Card => {
  const { name, expansion, cost } = card;
  return Object.freeze({ name, expansion, cost });
};

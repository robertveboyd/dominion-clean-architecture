import { makeRepository } from "../../lib/infrastructure";
import { tenCardDeck } from "../__fixtures__";

describe("test repository", () => {
  const repository = makeRepository();

  it('should get card with "Base" expansion', async () => {
    expect.assertions(1);
    const expansions = ["Base"];
    const deck = tenCardDeck;
    const card = await repository.getCard(expansions, deck);
    expect(card.expansion).toBe("Base");
  });

  it('should get deck with cards from "Base" expansion', async () => {
    expect.assertions(10);
    const expansions = ["Base"];
    const deck = await repository.getDeck(expansions);
    deck.cards.forEach(card => {
      expect(card.expansion).toBe("Base");
    });
  });

  it('should get deck with cards from "Base" or "Intrigue" expansion', async () => {
    expect.assertions(10);
    const expansions = ["Base", "Intrigue"];
    const deck = await repository.getDeck(expansions);
    deck.cards.forEach(card => {
      expect(card.expansion).toMatch(/^Base|Intrigue$/);
    });
  });
});

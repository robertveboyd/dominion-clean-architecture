import { makeDeck } from "../../lib/entities/deck";
import { singleCardDeck, tenCardDeck } from "../__fixtures__";

it("should make deck of 10 cards", () => {
  expect(makeDeck(tenCardDeck)).toEqual({ cards: tenCardDeck.cards });
});

it("deck with one card should throw error", () => {
  expect(() => makeDeck(singleCardDeck)).toThrowError(
    "Deck must contain exactly 10 cards"
  );
});

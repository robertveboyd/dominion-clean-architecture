import { ActionType } from "../../../../lib/infrastructure/redux/actions";
import deckReducer from "../../../../lib/infrastructure/redux/reducers/deck";
import { tenCardDeck } from "../../../__fixtures__";

it("should return initial state", () => {
  expect(deckReducer(undefined, { type: "" })).toEqual({ cards: [] });
});

it("should handle SET_DECK", () => {
  const initialState = { cards: [] };
  const deck = tenCardDeck;
  expect(
    deckReducer(initialState, { type: ActionType.SET_DECK, payload: deck })
  ).toEqual(deck);
});

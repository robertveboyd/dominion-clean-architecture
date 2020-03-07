import { ActionType, actions } from "../../../lib/infrastructure/redux/actions";
import { singleCard, tenCardDeck } from "../../__fixtures__";

it("should create replaceCard action", () => {
  const card = singleCard;
  const expected = {
    type: ActionType.REPLACE_CARD,
    payload: card
  };
  expect(actions.replaceCard(card)).toEqual(expected);
});

it("should create getDeck action", () => {
  const expected = {
    type: ActionType.GET_DECK
  };
  expect(actions.getDeck()).toEqual(expected);
});

it("should create setDeck action", () => {
  const deck = tenCardDeck;
  const expected = {
    type: ActionType.SET_DECK,
    payload: deck
  };
  expect(actions.setDeck(deck)).toEqual(expected);
});

it("should create toggleExpansion action", () => {
  const expansion = "Base";
  const expected = {
    type: ActionType.TOGGLE_EXPANSION,
    payload: expansion
  };
  expect(actions.toggleExpansion(expansion)).toEqual(expected);
});

import { Deck } from "../../../entities";
import { Action, ActionType } from "../actions";

const deckReducer = (state: Deck = { cards: [] }, action: Action): Deck => {
  switch (action.type) {
    case ActionType.SET_DECK:
      return action.payload;
    default:
      return state;
  }
};

export default deckReducer;

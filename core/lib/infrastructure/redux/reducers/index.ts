import deckReducer from "./deck";
import expansionsReducer from "./expansions";

export const reducers = Object.freeze({
  deck: deckReducer,
  expansions: expansionsReducer
});

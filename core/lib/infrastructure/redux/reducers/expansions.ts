import { Action, ActionType } from "../actions";

const expansionsReducer = (
  state: string[] = ["Base"],
  action: Action
): string[] => {
  switch (action.type) {
    case ActionType.TOGGLE_EXPANSION:
      if (state.length === 1 && state[0] === action.payload) {
        return state;
      }
      if (state.includes(action.payload)) {
        return state.filter(expansion => expansion !== action.payload);
      }
      return [...state, action.payload];
    default:
      return state;
  }
};

export default expansionsReducer;

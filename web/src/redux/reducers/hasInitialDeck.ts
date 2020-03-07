import { Action } from "core";
import { ActionType } from "../actions";

export const hasInitialDeckReducer = (
  state: boolean = false,
  action: Action
): boolean => {
  switch (action.type) {
    case ActionType.INITIALIZE_DECK:
      return true;
    default:
      return state;
  }
};

export default hasInitialDeckReducer;

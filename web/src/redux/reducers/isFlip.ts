import { Action } from "core";
import { ActionType } from "../actions";

export const isFlipReducer = (
  state: boolean[] = [...Array(10)].map(_ => true),
  action: Action
): boolean[] => {
  switch (action.type) {
    case ActionType.TOGGLE_FLIP:
      const newState = [...state];
      newState[action.payload] = !state[action.payload];
      return newState;
    default:
      return state;
  }
};

export default isFlipReducer;

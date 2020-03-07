import { Action } from "core";
import { ActionType } from "../actions";

const showSidebarReducer = (
  state: boolean = false,
  action: Action
): boolean => {
  switch (action.type) {
    case ActionType.TOGGLE_SIDEBAR:
      return !state;
    default:
      return state;
  }
};

export default showSidebarReducer;

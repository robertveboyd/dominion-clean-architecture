import {
  Action,
  ActionType as CoreActionType,
  actions as coreActions
} from "core";

enum ViewActionType {
  TOGGLE_FLIP = "TOGGLE_FLIP",
  TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR",
  TOGGLE_RANDOMIZING = "TOGGLE_RANDOMIZING",
  RANDOMIZE_DECK = "RANDOMIZE_DECK",
  RANDOMIZE_CARD = "RANDOMIZE_CARD",
  INITIALIZE_DECK = "INITIALIZE_DECK"
}

export const ActionType = { ...CoreActionType, ...ViewActionType };
export type ActionType = typeof ActionType;

const toggleFlip = (index: number): Action => ({
  type: ActionType.TOGGLE_FLIP,
  payload: index
});

const toggleSidebar = (): Action => ({
  type: ActionType.TOGGLE_SIDEBAR
});

const toggleRandomizing = (index: number): Action => ({
  type: ActionType.TOGGLE_RANDOMIZING,
  payload: index
});

const randomizeDeck = (): Action => ({
  type: ActionType.RANDOMIZE_DECK
});

const randomizeCard = (index: number): Action => ({
  type: ActionType.RANDOMIZE_CARD,
  payload: index
});

const initializeDeck = (): Action => ({
  type: ActionType.INITIALIZE_DECK
});

const viewActions = Object.freeze({
  toggleSidebar,
  toggleFlip,
  toggleRandomizing,
  randomizeDeck,
  randomizeCard,
  initializeDeck
});

export const actions = Object.freeze({
  ...coreActions,
  ...viewActions
});

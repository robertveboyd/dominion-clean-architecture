import { Card, Deck } from "../../../entities";

export interface Action {
  type: string;
  payload?: any;
}

export enum ActionType {
  REPLACE_CARD = "REPLACE_CARD",
  GET_DECK = "GET_DECK",
  SET_DECK = "SET_DECK",
  TOGGLE_EXPANSION = "TOGGLE_EXPANSION"
}

const replaceCard = (card: Card): Action => ({
  type: ActionType.REPLACE_CARD,
  payload: card
});

const getDeck = (): Action => ({
  type: ActionType.GET_DECK
});

const setDeck = (deck: Deck): Action => ({
  type: ActionType.SET_DECK,
  payload: deck
});

const toggleExpansion = (expansion: string): Action => ({
  type: ActionType.TOGGLE_EXPANSION,
  payload: expansion
});

export const actions = Object.freeze({
  replaceCard,
  getDeck,
  setDeck,
  toggleExpansion
});

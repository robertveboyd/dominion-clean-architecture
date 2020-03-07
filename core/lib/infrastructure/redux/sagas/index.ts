import { Card, Deck } from "../../../entities";
import { IBoundary } from "../../../useCases";
import { actions, ActionType, Action } from "./../actions";

import { put, select, call, takeLatest } from "redux-saga/effects";

export interface SagaWorkers {
  getDeckSaga: any;
  getCardSaga: any;
}

export interface SagaWatchers {
  watchGetDeckSaga: any;
  watchGetCardSaga: any;
}

export interface Sagas {
  workers: SagaWorkers;
  watchers: SagaWatchers;
}

export const makeSagas = (interactor: IBoundary): Sagas => {
  const getDeckSaga = function*() {
    const expansions: string[] = yield select(
      (state: { expansions: string[] }) => state.expansions
    );
    const deck: Deck = yield call(interactor.getDeck, expansions);
    yield put(actions.setDeck(deck));
  };

  const watchGetDeckSaga = function*() {
    yield takeLatest(ActionType.GET_DECK, getDeckSaga);
  };

  const getCardSaga = function*(action: Action) {
    const oldCard = action.payload;
    const state: {
      deck: { cards: Card[] };
      expansions: string[];
    } = yield select();
    const newCard: Card = yield call(
      interactor.getCard,
      state.expansions,
      state.deck
    );
    const cards = [...state.deck.cards];
    const idx = cards.indexOf(oldCard);
    cards[idx] = newCard;
    const deck = { cards };

    yield put(actions.setDeck(deck));
  };

  const watchGetCardSaga = function*() {
    yield takeLatest(ActionType.REPLACE_CARD, getCardSaga);
  };

  return {
    watchers: { watchGetDeckSaga, watchGetCardSaga },
    workers: { getDeckSaga, getCardSaga }
  };
};

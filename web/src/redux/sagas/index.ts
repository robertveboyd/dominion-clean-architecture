import { Action, Deck } from "core";
import { ActionType, actions } from "../actions";
import { RootState } from "../";
import {
  put,
  delay,
  take,
  takeLatest,
  takeEvery,
  select
} from "redux-saga/effects";

export interface SagaWorkers {
  randomizeDeckSaga: any;
  randomizeCardSaga: any;
}

export interface SagaWatchers {
  watchRandomizeDeckSaga: any;
  watchRandomizeCardSaga: any;
  watchInitializeDeckSaga: any;
}

export interface Sagas {
  workers: SagaWorkers;
  watchers: SagaWatchers;
}

export const makeSagas = (): Sagas => {
  const watchRandomizeDeckSaga = function*() {
    yield takeLatest(ActionType.RANDOMIZE_DECK, randomizeDeckSaga);
  };

  const randomizeDeckSaga = function*() {
    for (let i = 0; i < 10; i++) {
      yield put(actions.toggleRandomizing(i));
    }
    for (let i = 0; i < 10; i++) {
      yield put(actions.toggleFlip(i));
      yield delay(100);
    }
    yield delay(1000);
    yield put(actions.getDeck());
    for (let i = 0; i < 10; i++) {
      yield put(actions.toggleFlip(i));
      yield delay(100);
    }
    yield delay(1000);
    for (let i = 0; i < 10; i++) {
      yield put(actions.toggleRandomizing(i));
    }
  };

  const watchRandomizeCardSaga = function*() {
    yield takeEvery(ActionType.RANDOMIZE_CARD, randomizeCardSaga);
  };

  const randomizeCardSaga = function*(action: Action) {
    const getDeck = (state: RootState) => state.deck;
    const deck: Deck = yield select(getDeck);
    if (deck.cards.length !== 0) {
      const index = action.payload;
      const card = deck.cards[index];
      yield put(actions.toggleRandomizing(index));
      yield put(actions.toggleFlip(index));
      yield delay(1000);
      yield put(actions.replaceCard(card));
      yield put(actions.toggleFlip(index));
      yield delay(1000);
      yield put(actions.toggleRandomizing(index));
    }
  };

  const watchInitializeDeckSaga = function*() {
    yield take(ActionType.INITIALIZE_DECK);
    yield delay(100);
    yield put(actions.getDeck());
    for (let i = 0; i < 10; i++) {
      yield put(actions.toggleFlip(i));
      yield delay(100);
    }
    yield delay(1000);
    for (let i = 0; i < 10; i++) {
      yield put(actions.toggleRandomizing(i));
    }
  };

  return {
    watchers: {
      watchRandomizeDeckSaga,
      watchRandomizeCardSaga,
      watchInitializeDeckSaga
    },
    workers: { randomizeDeckSaga, randomizeCardSaga }
  };
};

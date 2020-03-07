export { actions, Action, ActionType } from "./actions";
export { makeSagas } from "./sagas";
export { reducers } from "./reducers";

import { applyMiddleware, createStore, Store } from "redux";
import createSagaMiddleware, { Saga } from "redux-saga";

export const makeStore = (sagas: Saga[], rootReducer: any): Store => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagas.forEach(saga => sagaMiddleware.run(saga));
  return store;
};

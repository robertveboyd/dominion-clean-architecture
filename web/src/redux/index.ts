import {
  makeInteractor,
  makeRepository,
  makeSagas as makeCoreSagas,
  makeStore,
  reducers as coreReducers
} from "core";

import { reducers as viewReducers } from "./reducers";
import { makeSagas as makeViewSagas } from "./sagas";
import { combineReducers } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export { actions } from "./actions";

const viewReducer = combineReducers(viewReducers);
const rootReducer = combineReducers({ ...coreReducers, view: viewReducer });

const repository = makeRepository();
const interactor = makeInteractor(repository);
const coreSagas = makeCoreSagas(interactor);
const viewSagas = makeViewSagas();

const sagas = Object.values({ ...coreSagas.watchers, ...viewSagas.watchers });

export const store = makeStore(sagas, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

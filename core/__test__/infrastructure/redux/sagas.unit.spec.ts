import { Action, ActionType, actions } from "../../../lib/infrastructure/redux";
import { makeSagas, Sagas } from "../../../lib/infrastructure/redux/sagas";
import { makeInteractor } from "../../__mocks__/interactor";

import { runSaga, Saga, stdChannel } from "redux-saga";
import { tenCardDeck, singleCard } from "../../__fixtures__";

async function recordSaga(
  saga: Saga,
  initialState: { deck: { cards: any[] }; expansions: string[] },
  initialAction: { type: string; payload?: any }
) {
  const dispatched: any[] = [];

  const channel = stdChannel();

  const options = {
    channel,
    dispatch: (action: { type: string; payload?: any }) => {
      dispatched.push(action);
      setImmediate(() => channel.put(action));
    },
    getState: () => initialState
  };

  await new Promise((resolve, reject) => {
    runSaga(options, saga)
      .toPromise()
      .then(result => resolve(result))
      .catch(err => reject(err));
    channel.put(initialAction);
  });

  return dispatched;
}
describe("Sagas", () => {
  const sagas: Sagas = makeSagas(makeInteractor());

  it("should pass getDeckSaga", async () => {
    const initialState: { deck: { cards: any[] }; expansions: string[] } = {
      deck: { cards: [] },
      expansions: ["Base"]
    };
    const initialAction: Action = {
      type: ActionType.GET_DECK
    };
    const dispatched = await recordSaga(
      sagas.workers.getDeckSaga,
      initialState,
      initialAction
    );
    const expected = [{ type: ActionType.SET_DECK, payload: tenCardDeck }];
    expect(dispatched).toEqual(expected);
  });

  it("should pass getcardSaga", async () => {
    const initialState: { deck: { cards: any[] }; expansions: string[] } = {
      deck: tenCardDeck,
      expansions: ["Base"]
    };
    const initialAction: Action = {
      type: ActionType.REPLACE_CARD,
      payload: tenCardDeck.cards[0]
    };
    const dispatched = await recordSaga(
      () => sagas.workers.getCardSaga(initialAction),
      initialState,
      initialAction
    );
    const newCard = singleCard;
    const cards = tenCardDeck.cards;
    cards[0] = newCard;

    const expected = [{ type: ActionType.SET_DECK, payload: { cards } }];

    expect(dispatched).toEqual(expected);
  });
});

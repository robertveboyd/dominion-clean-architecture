import { ActionType } from "../../../../lib/infrastructure/redux/actions";
import expansionsReducer from "../../../../lib/infrastructure/redux/reducers/expansions";

it("should return initial state", () => {
  expect(expansionsReducer(undefined, { type: "" })).toEqual(["Base"]);
});

it("should add 'Intrigue' expansion", () => {
  const initialState = ["Base"];
  const expansion = "Intrigue";
  expect(
    expansionsReducer(initialState, {
      type: ActionType.TOGGLE_EXPANSION,
      payload: expansion
    })
  ).toEqual(["Base", "Intrigue"]);
});

it("should remove 'Intrigue' expansion", () => {
  const initialState = ["Base", "Intrigue"];
  const expansion = "Intrigue";
  expect(
    expansionsReducer(initialState, {
      type: ActionType.TOGGLE_EXPANSION,
      payload: expansion
    })
  ).toEqual(["Base"]);
});

it("should not remove last expansion", () => {
  const initialState = ["Base"];
  const expansion = "Base";
  expect(
    expansionsReducer(initialState, {
      type: ActionType.TOGGLE_EXPANSION,
      payload: expansion
    })
  ).toEqual(["Base"]);
});

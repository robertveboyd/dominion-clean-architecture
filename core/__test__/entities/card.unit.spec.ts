import { makeCard } from "../../lib/entities/card";
import { singleCard } from "../__fixtures__";

it("should make card", () => {
  expect(makeCard(singleCard)).toEqual({
    name: "Adventurer",
    expansion: "Base",
    cost: 6
  });
});

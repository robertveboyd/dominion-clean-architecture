import { makeInteractor } from "../../lib/useCases";
import { makeRepositoryMock } from "../__mocks__";
import { singleCard, tenCardDeck } from "../__fixtures__";

describe("test interactor", () => {
  const repository = makeRepositoryMock();
  const interactor = makeInteractor(repository);

  it("should get card", async () => {
    const expansions = ["Base"];
    const deck = tenCardDeck;
    const card = await interactor.getCard(expansions, deck);
    expect(card).toEqual(singleCard);
  });

  it("should get deck", async () => {
    const expansions = ["Base"];
    const deck = await interactor.getDeck(expansions);
    expect(deck).toEqual(tenCardDeck);
  });
});

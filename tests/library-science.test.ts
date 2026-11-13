import * as Advances from '../Advances';
import * as PlayerActions from '../PlayerActionts';
import * as Yields from '../Yields';
import { Alphabet } from '@civ-clone/base-science-advance-alphabet/Alphabet';
import AlphabetDefault from '../Advances/Alphabet';
import ChooseResearch from '../PlayerActions/ChooseResearch';
import MandatoryPlayerAction from '@civ-clone/core-player/MandatoryPlayerAction';
import { Research } from '@civ-clone/base-city-yield-research/Research';
import { expect } from 'chai';

// Re-exports, not copies: a class from here is the class itself, so `instanceof` and a save's class names agree
//  whichever path a ruleset imports it from.
describe('library-science', (): void => {
  it('exports the ChooseResearch player action', (): void => {
    expect(PlayerActions.ChooseResearch).equal(ChooseResearch);
    expect(Object.keys(PlayerActions)).eql(['ChooseResearch']);
    expect(ChooseResearch.prototype).instanceOf(MandatoryPlayerAction);
    expect(ChooseResearch.name).equal('ChooseResearch');
  });

  it('re-exports the advances', (): void => {
    expect(Advances.Alphabet).equal(Alphabet);
    expect(AlphabetDefault).equal(Alphabet);
    expect(Object.keys(Advances)).length(67);
  });

  it('re-exports the research yield', (): void => {
    expect(Yields.Research).equal(Research);
    expect(Object.keys(Yields)).eql(['Research']);
  });
});

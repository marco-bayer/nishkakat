import { CHARACTERS } from './../mocks/mock-characters';
import { Combatant } from './combatant.model';

describe('combatant.model', () => {
  let combatant: Combatant;
  beforeEach(() => {
    combatant = new Combatant(CHARACTERS[0]);
  });

  it('#beginCombat generate an initiativeRoll between 1 and 6', () => {
    const iterationCount = 1000000;
    for (let index = 0; index < iterationCount; index++) {
      combatant.beginCombat();
      expect(combatant.initiativeWurf).toBeLessThanOrEqual(6);
      expect(combatant.initiativeWurf).toBeGreaterThanOrEqual(1);
    }
  });

  it('#beginCombat should set noOfParries to 0', () => {
    combatant.noOfParriesInCurrentRound = 10;
    combatant.beginCombat();
    expect(combatant.noOfParriesInCurrentRound).toBe(0);
  });

  it('#beginCombat should set hasActed to false', () => {
    combatant.hasActed = true;
    combatant.beginCombat();
    expect(combatant.hasActed).toBe(false);
  });

  it('#endTurn should set hasActed to true', () => {
    combatant.hasActed = false;
    combatant.endTurn();
    expect(combatant.hasActed).toBe(true);
  });

  it('#beginNewRound should set hasActed to false', () => {
    combatant.hasActed  = true;
    combatant.beginNewRound();
    expect(combatant.hasActed).toBe(false);
  });

  it('#parray should add 1 to the noOfParriesInCurrentRound if allowedToParry is true', () => {
  });

  it('#beginNewRound should set noOfParriesInCurrentRound to 0', () => {
    combatant.noOfParriesInCurrentRound = 1;
    combatant.beginNewRound();
    expect(combatant.noOfParriesInCurrentRound).toBe(0);
  });

  it('#allowedToParry should always be true for a Character that is a Hero', () => {
    combatant.character.isHero = true;
    combatant.noOfParriesInCurrentRound = 0;
    expect(combatant.allowedToParry()).toBe(true);

    combatant.noOfParriesInCurrentRound = 1;
    expect(combatant.allowedToParry()).toBe(true);

    combatant.noOfParriesInCurrentRound = 200;
    expect(combatant.allowedToParry()).toBe(true);
  });

  it('#allowedToParry should only be true if noOfParriesInCurrentRound is 0 for a Character that is not a Hero', () => {
    combatant.character.isHero = false;
    combatant.noOfParriesInCurrentRound = 0;
    expect(combatant.allowedToParry()).toBe(true);

    combatant.noOfParriesInCurrentRound = 1;
    expect(combatant.allowedToParry()).toBe(false);

    combatant.noOfParriesInCurrentRound = 200;
    expect(combatant.allowedToParry()).toBe(false);
  });

  it('#parry should be true and raise noOfParriesInCurrentRound by 1 if allowedToParry is true', () => {
    combatant.character.isHero = true;
    combatant.noOfParriesInCurrentRound = 10;
    expect(combatant.allowedToParry()).toBe(true);

    const result = combatant.parry();
    expect(result).toBe(true);
    expect(combatant.noOfParriesInCurrentRound).toBe(11);
  });

  it('#parry should be false and noOfParriesInCurrentRound should stay the same if allowedToParry is true', () => {
    combatant.character.isHero = false;
    combatant.noOfParriesInCurrentRound = 10;
    expect(combatant.allowedToParry()).toBe(false);

    const result = combatant.parry();
    expect(result).toBe(false);
    expect(combatant.noOfParriesInCurrentRound).toBe(10);
  });
});

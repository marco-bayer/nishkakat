import { CHARACTERS } from './../mocks/mock-characters';
import { Combatant } from './combatant.model';

describe('combatant.model', () => {
    let combatant: Combatant;
    beforeEach(() => {
      combatant = new Combatant(CHARACTERS[0]);
    });

    it('#beginCombat', () => {
      for (let index = 0; index < 10000; index++) {
        combatant.beginCombat();
        expect(combatant.initiativeWurf).toBeLessThanOrEqual(6);
        expect(combatant.initiativeWurf).toBeGreaterThanOrEqual(1);
      }
    });
  }
);

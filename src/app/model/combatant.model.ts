import { Character } from './character.model';
import { CombatantStates } from './combatantState.model';

export class Combatant {
  id: number;
  character: Character;
  initiativeWurf = 0;
  zustaende: CombatantStates;

  hasActed: boolean;

  noOfParriesInCurrentRound: number;

  constructor(character: Character) {
    this.character = character;
    this.hasActed = false;
    this.noOfParriesInCurrentRound = 0;
  }

  getInitiative(): number {
    return (
      this.character.initiative +
      this.initiativeWurf +
      this.zustaende.getIniChange()
    );
  }

  endTurn(): void {
    this.hasActed = true;
  }

  beginNewRound(): void {
    this.hasActed = false;
    this.noOfParriesInCurrentRound = 0;
  }

  beginCombat(): void {
    this.hasActed = false;
    this.noOfParriesInCurrentRound = 0;
    this.initiativeWurf = Math.floor(Math.random() * 0.999999 * 6) + 1;
  }

  allowedToParry(): boolean {
    return (this.character.isHero || this.noOfParriesInCurrentRound < 1);
  }

  parry(): boolean {
    if (this.allowedToParry()) {
      this.noOfParriesInCurrentRound++;
      return true;
    } else {
      return false;
    }
  }
}

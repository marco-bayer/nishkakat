import { Character } from './Character';
import { Zustaende } from './Zustaende';

export class Combatant {
  character: Character;
  initiativeWurf: number | 0;
  zustaende: Zustaende;

  hasActed: boolean;

  noOfParriesInCurrentRound: number | 0;

  constructor(character: Character) {
    this.character = character;
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

  canParry(): boolean {
    return this.character.isHero || this.noOfParriesInCurrentRound < 1;
  }

  parry(): boolean {
    if (this.canParry) {
      this.noOfParriesInCurrentRound++;
      return true;
    } else {
      return false;
    }
  }
}

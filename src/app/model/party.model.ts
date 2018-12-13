import { Combatant } from './combatant.model';

export class Party {
  constructor() {
    this.combatants = new Array();
  }
  name: string;
  combatants: Combatant[];
}

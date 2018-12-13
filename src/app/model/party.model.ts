import { Combatant } from './combatant.model';

export interface Party {
  name: string;
  combatants: Combatant[];
}

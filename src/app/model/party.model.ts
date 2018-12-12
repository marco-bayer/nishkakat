import { Character } from './character.model';

export interface Party {
  name: string;
  combatants: Character[];
}

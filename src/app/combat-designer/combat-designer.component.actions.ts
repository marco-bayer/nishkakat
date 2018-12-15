import { Character } from '../model/character.model';
export class AddCharacterToParty {
  static readonly type = '[Combat Designer] Add Character to Party';

  constructor(public character: Character) {}
}

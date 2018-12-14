import { Party } from './../model/party.model';
import {
  Character,
  CharacterType,
  GOOD_CHARACTER_TYPES,
  EVIL_CHARACTER_TYPES
} from './../model/character.model';
import { Injectable } from '@angular/core';
import { Combatant } from '../model/combatant.model';

@Injectable({
  providedIn: 'root'
})
export class PartyService {
  constructor() {}

  addCharacterToParty(character: Character, parties: Party[]): Party[] {
    const combatant = new Combatant(character);
    let party = this.getParty(character, parties);

    if (party == null) {
      party = new Party();
      party.name = 'Party ' + (parties.length + 1);
      parties.push(party);
    }

    party.combatants.push(combatant);

    return parties;
  }

  canAdd(character: Character, parties: Party[]): boolean {
    const party = this.getParty(character, parties);

    if (party == null) {
      return true;
    }

    return !character.isHero ||
      party.combatants.findIndex(c => c.character.id === character.id) === -1;
  }

  private getParty(character: Character, parties: Party[]): Party {
    const characterTypeGroup = this.getCharacterTypeGroup(
      character.characterType
    );

    return parties.find(p =>
      this.belongCombatantsToTypeGroup(p.combatants, characterTypeGroup)
    );
  }


  private belongCombatantsToTypeGroup(
    combatants: Combatant[],
    characterTypes: CharacterType[]
  ): boolean {
    const i = combatants.findIndex(c =>
      this.belongCombatantToTypeGroup(c, characterTypes)
    );
    return i >= 0;
  }

  private belongCombatantToTypeGroup(
    combatant: Combatant,
    characterTypes: CharacterType[]
  ): boolean {
    const i = characterTypes.findIndex(
      ct => combatant.character.characterType === ct
    );
    return i >= 0;
  }

  private getCharacterTypeGroup(characterType: CharacterType) {
    return GOOD_CHARACTER_TYPES.findIndex(ct => characterType === ct) >= 0
      ? GOOD_CHARACTER_TYPES
      : EVIL_CHARACTER_TYPES;
  }
}

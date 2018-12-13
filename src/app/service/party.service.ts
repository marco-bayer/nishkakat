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

    const characterTypeGroup = this.getCharacterTypeGroup(
      character.characterType
    );

    let party = parties.find(p =>
      this.belongCombatantsToTypeGroup(p.combatants, characterTypeGroup)
    );

    if (party == null) {
      party = new Party();
      parties.push(party);
    }

    if (party.combatants.findIndex(c => c.character.id === character.id) === -1) {
      party.combatants.push(combatant);
    }

    return parties;
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

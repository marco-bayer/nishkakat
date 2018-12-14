import { Character } from '../model/character.model';
import { Injectable } from '@angular/core';
import { CHARACTERS } from '../mocks/mock-characters';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  getCharacter(id: number): Character {
    return CHARACTERS.find(character => character.id === id);
  }

  constructor() { }

  getCharacterList(): Character[] {
    return CHARACTERS;
  }
}

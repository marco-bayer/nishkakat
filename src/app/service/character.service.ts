import { Character } from './../model/Character';
import { Injectable } from '@angular/core';
import { CHARACTERS } from '../mocks/mock-characters';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor() { }

  getCharacterList(): Character[] {
    return CHARACTERS;
  }
}

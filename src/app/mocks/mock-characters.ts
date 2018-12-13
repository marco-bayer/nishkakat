import { CharacterType } from '../model/character.model';
import { Character } from '../model/character.model';
import { MENSCH, ELF, HALBELF, ZWERG, OTHER } from './mock-races';

export const CHARACTERS: Character[] = [
  new Character(1, 'Batman', MENSCH, CharacterType.Player, true, 13, 13, 13, 13, 13, 15, 15, 15),
  new Character(2, 'Robin', ELF, CharacterType.Ally, true, 12, 12, 14, 14, 14, 15, 14, 14),
  new Character(3, 'Joker', HALBELF, CharacterType.Enemy, true, 14, 15, 13, 13, 12, 16, 15, 12),
  new Character(4, 'Pinguin', ZWERG, CharacterType.Enemy, true, 10, 14, 12, 13, 10, 11, 17, 14),
  new Character(5, 'Goon', MENSCH, CharacterType.Enemy, false),
  new Character(6, 'Wolf', OTHER, CharacterType.Beast, false),
  new Character(7, 'Demon', OTHER, CharacterType.Supernatural, false)
];


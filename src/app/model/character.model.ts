import { Race } from './race.model';

export class Character {
  // organisational
  id: number;
  name: string;
  playerName?: string;
  characterType: CharacterType;
  isHero: boolean;

  // attributes
  mut: number;
  klugheit: number;
  intuition: number;
  charisma: number;
  fingerfertigkeit: number;
  gewandheit: number;
  konstitution: number;
  koerperkraft: number;

  // race
  rasse: Race;

  // calculated values
  ausweichen: number;
  initiative: number;
  geschwindigkeit: number;
  lebensenergie: number;
  seelenkraft: number;
  zaehigkeit: number;
  schicksalspunkte: number;

  constructor(
    id: number,
    name: string,
    rasse: Race,
    characterType: CharacterType,
    isHero: boolean,
    mut?: number,
    klugheit?: number,
    intuition?: number,
    charisma?: number,
    fingerfertigkeit?: number,
    gewandheit?: number,
    konstitution?: number,
    koerperkraft?: number
  ) {
    this.id = id;
    this.name = name;
    this.rasse = rasse;
    this.characterType = characterType;
    this.isHero = isHero;
    // assign attributes
    mut != null ? (this.mut = mut) : (this.mut = 8);
    klugheit != null ? (this.klugheit = klugheit) : (this.klugheit = 8);
    intuition != null ? (this.intuition = intuition) : (this.intuition = 8);
    charisma != null ? (this.charisma = charisma) : (this.charisma = 8);
    fingerfertigkeit != null
      ? (this.fingerfertigkeit = fingerfertigkeit)
      : (this.fingerfertigkeit = 8);
    gewandheit != null ? (this.gewandheit = gewandheit) : (this.gewandheit = 8);
    konstitution != null
      ? (this.konstitution = konstitution)
      : (this.konstitution = 8);
    koerperkraft != null
      ? (this.koerperkraft = koerperkraft)
      : (this.koerperkraft = 8);

    // calculate values
    this.ausweichen = Math.round(this.gewandheit / 2);
    this.initiative = Math.round((this.mut + this.gewandheit) / 2);
    this.geschwindigkeit = this.rasse.geschwindigkeit;
    this.lebensenergie = 2 * this.konstitution + this.rasse.modLebenspunkte;
    this.seelenkraft =
      Math.round((this.mut + this.klugheit + this.intuition) / 6) +
      this.rasse.modSeelenkraft;
    this.zaehigkeit =
      Math.round((this.konstitution * 2 + this.koerperkraft) / 6) +
      this.rasse.modZaehigkeit;
    this.schicksalspunkte = this.isHero ? 3 : 0;
  }

  setName(name: string): void {
    this.name = name;
  }
}

export enum CharacterType {
  Player,
  Ally,
  Enemy,
  Beast,
  Supernatural
}

export const GOOD_CHARACTER_TYPES = [CharacterType.Player, CharacterType.Ally];
export const EVIL_CHARACTER_TYPES = [
  CharacterType.Enemy,
  CharacterType.Beast,
  CharacterType.Supernatural
];

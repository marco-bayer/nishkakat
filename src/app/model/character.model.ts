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
    mut?: number | 8,
    klugheit?: number | 8,
    intuition?: number | 8,
    charisma?: number | 8,
    fingerfertigkeit?: number | 8,
    gewandheit?: number | 8,
    konstitution?: number | 8,
    koerperkraft?: number | 8
  ) {
    this.id = id;
    this.name = name;
    this.rasse = rasse;
    this.characterType = characterType;
    this.isHero = isHero;
    // assign attributes
    this.mut = mut;
    this.klugheit = klugheit;
    this.intuition = intuition;
    this.charisma = charisma;
    this.fingerfertigkeit = fingerfertigkeit;
    this.gewandheit = gewandheit;
    this.konstitution = konstitution;
    this.koerperkraft = koerperkraft;

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
}

export enum CharacterType {
  Player,
  Ally,
  Enemy,
  Beast,
  Supernatural
}

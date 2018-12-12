import { Race } from "./Race";

export class Character {
  // organisational
  id: number;
  name: string;
  playerName: string;
  characterType: CharacterType;
  isHero: boolean;

  // attributes
  mut: number;
  klugheit: number;
  intuition: number;
  charisma: number;
  fingerfertigkaiet: number;
  gewandheit: number;
  konstitution: number;
  koerperkraft: number;

  // race
  rasse: Race;

  // calculated values
  ausweichen = Math.round(this.gewandheit / 2);
  initiative = Math.round((this.mut + this.gewandheit) / 2);
  geschwindigkeit = this.rasse.geschwindigkeit;
  lebensenergie = 2 * this.konstitution + this.rasse.modLebenspunkte;
  seelenkraft =
    Math.round((this.mut + this.klugheit + this.intuition) / 6) +
    this.rasse.modSeelenkraft;
  zaehigkeit =
    Math.round((this.konstitution * 2 + this.koerperkraft) / 6) +
    this.rasse.modZaehigkeit;
  schicksalspunkte = this.isHero ? 3 : 0;
}

export enum CharacterType {
  Player,
  Ally,
  Enemy,
  Beast,
  Supernatural
}

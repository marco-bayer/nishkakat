import { Party } from './party.model';

export interface Encounter {
  name: string;
  lastEditDate: Date;
  parties: Party[];
}

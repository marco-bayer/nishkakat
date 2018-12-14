import { Group } from './group.model';

export class Party extends Group {
  constructor() {
    super();
    this.combatants = new Array();
  }

  groups: Group[];
}

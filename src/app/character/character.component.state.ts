import { CharacterService } from './../service/character.service';
import { State } from '@ngxs/store';

export class CharacterStateModel {
  dirtied: boolean;
}

@State<CharacterStateModel>({
  name: 'characterState',
  defaults: {
    dirtied: false
  }
})
export class CharacterState {
  constructor() {}
}

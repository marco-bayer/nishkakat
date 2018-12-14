import { CharacterService } from './../../service/character.service';
import { Character } from '../../model/character.model';
import { CharactersFetched } from './../actions/actions';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { LoadCharacters } from '../actions/actions';
import { state } from '@angular/animations';

export interface CharactersStateModel {
  loading: boolean;
  list: Character[];
}

@State<CharactersStateModel>({
  name: 'characters',
  defaults: {
    loading: false,
    list: []
  }
})
export class CharactersState {

  constructor(private characterService: CharacterService) {}

  @Action(LoadCharacters)
  listCharacters(ctx: StateContext<CharactersStateModel>) {
    ctx.setState({
      ...state,
      loading: true,
      list: []
    });

    const result = this.characterService.getCharacterList();

    return ctx.dispatch(
      new CharactersFetched(result)
    );
  }

  @Action(CharactersFetched)
  updateFetchedCharacters(ctx: StateContext<CharactersStateModel>, action: CharactersFetched) {
    ctx.setState({
      ...state,
      loading: false,
      list: action.characters
    });
  }
}

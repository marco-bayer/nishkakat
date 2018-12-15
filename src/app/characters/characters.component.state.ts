import { CharacterService } from '../service/character.service';
import { Character } from '../model/character.model';
import { CharactersFetched, SelectCharacter } from './characters.component.actions';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { LoadCharacters } from './characters.component.actions';
import { state } from '@angular/animations';

export interface CharactersStateModel {
  loading: boolean;
  list: Character[];
  selectedId: number;
}

@State<CharactersStateModel>({
  name: 'characters',
  defaults: {
    loading: false,
    list: [],
    selectedId: null
  }
})
export class CharactersState {
  constructor(private characterService: CharacterService) {}

  @Action(LoadCharacters)
  listCharacters(ctx: StateContext<CharactersStateModel>) {
    ctx.setState({
      ...state,
      loading: true,
      list: [],
      selectedId: null
    });

    const result = this.characterService.getCharacterList();

    return ctx.dispatch(new CharactersFetched(result));
  }

  @Action(CharactersFetched)
  updateFetchedCharacters(ctx: StateContext<CharactersStateModel>, action: CharactersFetched) {
    ctx.patchState({
      loading: false,
      list: action.characters
    });
  }

  @Action(SelectCharacter)
  selectCharacter(
    ctx: StateContext<CharactersStateModel>,
    action: SelectCharacter
  ) {
    ctx.patchState({
      selectedId: action.characterId
    });
  }
}

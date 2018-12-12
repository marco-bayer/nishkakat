import { CharactersFetched } from './../actions/actions';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { LoadCharacters } from '../actions/actions';
import { state } from '@angular/animations';

export interface CharactersStateModel {
  loading: boolean;
  list: string[];
}

@State<CharactersStateModel>({
  name: 'characters',
  defaults: {
    loading: false,
    list: ['Hans']
  }
})
export class CharactersState {


  @Action(LoadCharacters)
  listCharacters(ctx: StateContext<CharactersStateModel>) {
    console.log('list characters');
    ctx.setState({
      ...state,
      loading: true,
      list: []
    });

    // TODO: call service to retrieve data
    const result = ['Marco', 'Peter', 'Sabine', 'Tian'];

    return ctx.dispatch(
      new CharactersFetched(result)
    );
  }

  @Action(CharactersFetched)
  updateFetchedCharacters(ctx: StateContext<CharactersStateModel>, action: CharactersFetched) {
    console.log('update characters', action.characters);
    ctx.setState({
      ...state,
      loading: false,
      list: action.characters
    });
  }
}

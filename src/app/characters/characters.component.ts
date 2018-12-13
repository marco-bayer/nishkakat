import { Character, CharacterType } from '../model/character.model';
import { LoadCharacters } from './actions/actions';
import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  @Select(state => state.characters.loading) loading$: Observable<boolean>;
  @Select(state => state.characters.list) characters$: Observable<Character[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new LoadCharacters());
  }

  getCharacterTypeCssClass(characterType: CharacterType): string {
    switch (characterType) {
      case CharacterType.Player:
        return 'player';
        break;
      case CharacterType.Ally:
        return 'ally';
        break;
      case CharacterType.Enemy:
        return 'enemy';
        break;
      case CharacterType.Beast:
        return 'beast';
        break;
      case CharacterType.Supernatural:
        return 'supernatural';
        break;
      default:
        return 'enemy';
        break;
    }
  }
}

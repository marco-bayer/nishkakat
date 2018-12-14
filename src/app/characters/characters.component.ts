import { Character, CharacterType } from '../model/character.model';
import { LoadCharacters, SelectCharacter } from './actions/actions';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  @Select(state => state.characters.loading) loading$: Observable<boolean>;
  @Select(state => state.characters.list) characters$: Observable<boolean>;

  @Output() selectCharacter = new EventEmitter<Character>();

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new LoadCharacters());
  }

  onSelectCharacter(character: Character): void {
    this.selectCharacter.emit(character);
    this.store.dispatch(new SelectCharacter(character.id));
  }
}

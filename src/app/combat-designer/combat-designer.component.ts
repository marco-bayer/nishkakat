import { tap } from 'rxjs/operators';
import { AddCharacterToParty } from './actions/actions';
import { Character } from './../model/character.model';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { Party } from './../model/party.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combat-designer',
  templateUrl: './combat-designer.component.html',
  styleUrls: ['./combat-designer.component.css']
})
export class CombatDesignerComponent implements OnInit {

  @Select(state => state.combatdesigner.parties) parties$: Observable<Party[]>;
  @Select(state => state.characters.list) list$: Observable<Character[]>;

  constructor(private store: Store) {}

  ngOnInit() {
  }

  addCharacterToParty(character: Character) {
    this.store.dispatch(new AddCharacterToParty(character));
  }

}

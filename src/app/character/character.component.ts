import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Character } from '../model/character.model';
import { Select, Store } from '@ngxs/store';
import { CharacterService } from '../service/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Select(state => state.characters.selectedId) selectedId$: Observable<number>;

  character: Character;

  constructor(public store: Store, public characterService: CharacterService) {}
  ngOnInit() {
    this.selectedId$.subscribe(id => this.fetchCharacter(id));
  }

  fetchCharacter(id: number): void {
    this.character = this.characterService.getCharacter(id);
  }
}

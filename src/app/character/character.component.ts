import { ZWERG } from './../mocks/mock-races';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Character, CharacterType } from '../model/character.model';
import { Select, Store } from '@ngxs/store';
import { CharacterService } from '../service/character.service';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Select(state => state.characters.selectedId) selectedId$: Observable<number>;

  character: Character;

  herkunftForm = this.fb.group({
    name: [null, Validators.required],
    spezies: null,
    kultur: null,
    profession: null
  });

  hasUnitNumber = false;

  constructor(
    public store: Store,
    public characterService: CharacterService,
    private fb: FormBuilder
  ) {}

  onSubmit() {
    Object.defineProperty(this.character, 'name', {writable: true, value: this.herkunftForm.get('name').value});
    // this.characterService.writeCharacter(this.character);
  }

  ngOnInit() {
    this.selectedId$.subscribe(id => this.fetchCharacter(id));
  }

  fetchCharacter(id: number): void {
    this.character = this.characterService.getCharacter(id);
    if (this.character != null) {
      this.herkunftForm.patchValue({
        name: this.character.name
      });
    }
  }
}

export class MyFormComponent {}

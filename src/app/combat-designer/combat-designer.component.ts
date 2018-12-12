import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { Party } from './../model/party.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combat-designer',
  templateUrl: './combat-designer.component.html',
  styleUrls: ['./combat-designer.component.css']
})
export class CombatDesignerComponent implements OnInit {

  @Select(state => state.combatdesigner.parties) parties$: Observable<Party[]>;

  constructor() { }

  ngOnInit() {
  }

}

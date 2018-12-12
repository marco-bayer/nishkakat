import { Component, OnInit, Input } from '@angular/core';
import { Party } from '../model/party.model';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {
  @Input()
  party: Party;

  constructor() { }

  ngOnInit() {
  }

}

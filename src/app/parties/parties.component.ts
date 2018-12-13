import { Party } from './../model/party.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.css']
})
export class PartiesComponent implements OnInit {

  @Input()
  parties: Party[];

  constructor() { }

  ngOnInit() {
  }

}

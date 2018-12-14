import { AddCharacterToParty } from './../actions/actions';
import { Party } from './../../model/party.model';
import { State, Action, StateContext } from '@ngxs/store';
import { createText } from '@angular/core/src/view/text';
import { PartyService } from 'src/app/service/party.service';

export class CombatDesignerStateModel {
  loading: boolean;
  parties: Party[];
}

@State<CombatDesignerStateModel>({
  name: 'combatdesigner',
  defaults: {
    loading: false,
    parties: []
  }
})
export class CombatDesignerState {
  constructor(private partyService: PartyService) {}

  @Action(AddCharacterToParty)
  addCharacterToParty(
    ctx: StateContext<CombatDesignerStateModel>,
    action: AddCharacterToParty
  ) {
    const currentParties = JSON.parse(JSON.stringify(ctx.getState().parties));
    const newParties = this.partyService.addCharacterToParty(
      action.character,
      currentParties
    );
    ctx.patchState({
      parties: newParties
    });
  }
}

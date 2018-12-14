import { AddCharacterToParty } from './../actions/actions';
import { Party } from './../../model/party.model';
import { State, Action, StateContext } from '@ngxs/store';
import { createText } from '@angular/core/src/view/text';
import { PartyService } from 'src/app/service/party.service';

export class CombatDesignerStateModel {
  loading: boolean;
  parties: Party[];
  usageCountMap: {};
}

@State<CombatDesignerStateModel>({
  name: 'combatdesigner',
  defaults: {
    loading: false,
    parties: [],
    usageCountMap: {}
  }
})
export class CombatDesignerState {
  constructor(private partyService: PartyService) {}

  @Action(AddCharacterToParty)
  addCharacterToParty(
    ctx: StateContext<CombatDesignerStateModel>,
    action: AddCharacterToParty
  ) {
    const state = ctx.getState();
    const parties = JSON.parse(JSON.stringify(state.parties));
    if (this.partyService.canAdd(action.character, parties)) {
      const newParties = this.partyService.addCharacterToParty(
        action.character,
        parties
      );
      ctx.patchState({
        parties: newParties
      });
    }
  }
}

import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { environment } from './../environments/environment';
import {
  CombatDesignerState
} from './combat-designer/combat-designer.component.state';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatTabsModule,
  MatGridListModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule, MatInputModule, MatSelectModule, MatRadioModule, MatCardModule
} from '@angular/material';


import { NgxsModule } from '@ngxs/store';
import { CharactersComponent } from './characters/characters.component';
import { CharactersState } from './characters/characters.component.state';
import { CombatDesignerComponent } from './combat-designer/combat-designer.component';
import { PartyComponent } from './party/party.component';
import { PartiesComponent } from './parties/parties.component';
import { CombatManagerComponent } from './combat-manager/combat-manager.component';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { CharacterComponent } from './character/character.component';
import { CharacterDesignerComponent } from './character-designer/character-designer.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CombatDesignerComponent,
    PartyComponent,
    PartiesComponent,
    CombatManagerComponent,
    CharacterComponent,
    CharacterDesignerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatGridListModule,
    NgxsModule.forRoot([CharactersState, CombatDesignerState], {
      developmentMode: !environment.production
    }),

    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    }),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production
    }),
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

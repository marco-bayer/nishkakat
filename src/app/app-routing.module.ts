import { CharactersComponent } from './characters/characters.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombatDesignerComponent } from './combat-designer/combat-designer.component';

const routes: Routes = [
  {path: 'characters', component: CharactersComponent},
  {path: 'combatDesigner', component: CombatDesignerComponent},
  {path: 'combatManager', component: CombatDesignerComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatManagerComponent } from './combat-manager.component';

describe('CombatManagerComponent', () => {
  let component: CombatManagerComponent;
  let fixture: ComponentFixture<CombatManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombatManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

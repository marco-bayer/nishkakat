import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatDesignerComponent } from './combat-designer.component';

describe('CombatDesignerComponent', () => {
  let component: CombatDesignerComponent;
  let fixture: ComponentFixture<CombatDesignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombatDesignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

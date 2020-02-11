import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GateauComponent } from './gateau.component';

describe('GateauComponent', () => {
  let component: GateauComponent;
  let fixture: ComponentFixture<GateauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GateauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GateauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

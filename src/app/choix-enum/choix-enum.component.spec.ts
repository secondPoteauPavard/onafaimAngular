import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixEnumComponent } from './choix-enum.component';

describe('ChoixEnumComponent', () => {
  let component: ChoixEnumComponent;
  let fixture: ComponentFixture<ChoixEnumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixEnumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixEnumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

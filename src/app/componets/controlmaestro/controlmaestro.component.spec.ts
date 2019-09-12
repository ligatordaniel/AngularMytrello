import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlmaestroComponent } from './controlmaestro.component';

describe('ControlmaestroComponent', () => {
  let component: ControlmaestroComponent;
  let fixture: ComponentFixture<ControlmaestroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlmaestroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlmaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

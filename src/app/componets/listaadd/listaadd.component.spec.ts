import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaaddComponent } from './listaadd.component';

describe('ListaaddComponent', () => {
  let component: ListaaddComponent;
  let fixture: ComponentFixture<ListaaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

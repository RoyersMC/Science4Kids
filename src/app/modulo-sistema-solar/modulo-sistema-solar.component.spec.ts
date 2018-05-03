import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloSistemaSolarComponent } from './modulo-sistema-solar.component';

describe('ModuloSistemaSolarComponent', () => {
  let component: ModuloSistemaSolarComponent;
  let fixture: ComponentFixture<ModuloSistemaSolarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloSistemaSolarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloSistemaSolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

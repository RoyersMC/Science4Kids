import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloOceanoComponent } from './modulo-oceano.component';

describe('ModuloOceanoComponent', () => {
  let component: ModuloOceanoComponent;
  let fixture: ComponentFixture<ModuloOceanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloOceanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloOceanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

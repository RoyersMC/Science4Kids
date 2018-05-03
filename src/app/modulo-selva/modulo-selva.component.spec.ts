import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloSelvaComponent } from './modulo-selva.component';

describe('ModuloSelvaComponent', () => {
  let component: ModuloSelvaComponent;
  let fixture: ComponentFixture<ModuloSelvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloSelvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloSelvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

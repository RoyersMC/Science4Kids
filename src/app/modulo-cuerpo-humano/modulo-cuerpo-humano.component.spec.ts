import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloCuerpoHumanoComponent } from './modulo-cuerpo-humano.component';

describe('ModuloCuerpoHumanoComponent', () => {
  let component: ModuloCuerpoHumanoComponent;
  let fixture: ComponentFixture<ModuloCuerpoHumanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloCuerpoHumanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloCuerpoHumanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSiembrasComponent } from './editar-siembras.component';

describe('EditarSiembrasComponent', () => {
  let component: EditarSiembrasComponent;
  let fixture: ComponentFixture<EditarSiembrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarSiembrasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarSiembrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

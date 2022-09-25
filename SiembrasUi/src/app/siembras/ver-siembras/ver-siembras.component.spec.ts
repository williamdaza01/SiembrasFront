import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerSiembrasComponent } from './ver-siembras.component';

describe('VerSiembrasComponent', () => {
  let component: VerSiembrasComponent;
  let fixture: ComponentFixture<VerSiembrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerSiembrasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerSiembrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

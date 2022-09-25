import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerContratistasComponent } from './ver-contratistas.component';

describe('VerContratistasComponent', () => {
  let component: VerContratistasComponent;
  let fixture: ComponentFixture<VerContratistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerContratistasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerContratistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

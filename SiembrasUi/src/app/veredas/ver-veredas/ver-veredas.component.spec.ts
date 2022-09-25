import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerVeredasComponent } from './ver-veredas.component';

describe('VerVeredasComponent', () => {
  let component: VerVeredasComponent;
  let fixture: ComponentFixture<VerVeredasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerVeredasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerVeredasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerArbolesComponent } from './ver-arboles.component';

describe('VerArbolesComponent', () => {
  let component: VerArbolesComponent;
  let fixture: ComponentFixture<VerArbolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerArbolesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerArbolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

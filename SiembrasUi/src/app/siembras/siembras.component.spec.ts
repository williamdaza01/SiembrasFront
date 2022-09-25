import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiembrasComponent } from './siembras.component';

describe('SiembrasComponent', () => {
  let component: SiembrasComponent;
  let fixture: ComponentFixture<SiembrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiembrasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiembrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateParkingspotsComponent } from './create-parkingspots.component';

describe('CreateParkingspotsComponent', () => {
  let component: CreateParkingspotsComponent;
  let fixture: ComponentFixture<CreateParkingspotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateParkingspotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateParkingspotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

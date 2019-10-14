import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkinglotsManagementComponent } from './parkinglots-management.component';

describe('ParkinglotsManagementComponent', () => {
  let component: ParkinglotsManagementComponent;
  let fixture: ComponentFixture<ParkinglotsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkinglotsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkinglotsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

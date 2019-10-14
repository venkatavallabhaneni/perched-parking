import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingspotbookingDetailsComponent } from './parkingspotbooking-details.component';

describe('ParkingspotbookingDetailsComponent', () => {
  let component: ParkingspotbookingDetailsComponent;
  let fixture: ComponentFixture<ParkingspotbookingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingspotbookingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingspotbookingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

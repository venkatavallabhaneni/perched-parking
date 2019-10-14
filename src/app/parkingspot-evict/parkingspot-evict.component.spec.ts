import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingspotEvictComponent } from './parkingspot-evict.component';

describe('ParkingspotEvictComponent', () => {
  let component: ParkingspotEvictComponent;
  let fixture: ComponentFixture<ParkingspotEvictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingspotEvictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingspotEvictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

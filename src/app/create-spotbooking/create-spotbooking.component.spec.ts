import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSpotbookingComponent } from './create-spotbooking.component';

describe('CreateSpotbookingComponent', () => {
  let component: CreateSpotbookingComponent;
  let fixture: ComponentFixture<CreateSpotbookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSpotbookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSpotbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

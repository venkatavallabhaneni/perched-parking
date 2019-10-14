import { Component, OnInit } from '@angular/core';
import { ParkingspotbookingService } from '../parkingspotbooking.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { BookingQuery } from '../BookingQuery';

@Component({
  selector: 'app-create-spotbooking',
  templateUrl: './create-spotbooking.component.html',
  styleUrls: ['./create-spotbooking.component.css']
})
export class CreateSpotbookingComponent implements OnInit {

  bookingQuery: BookingQuery = new BookingQuery();
  submitted = false;
  lotId: number;

  constructor(private route: ActivatedRoute, private router: Router,
    private parkingspotbookingService: ParkingspotbookingService) { }


  ngOnInit() {
    
  }

  save() {
    this.bookingQuery.lotId = this.route.snapshot.params['lotId'];
    this.parkingspotbookingService.bookASlot(this.bookingQuery)
      .subscribe(data => console.log(data), error => console.log(error));

  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}

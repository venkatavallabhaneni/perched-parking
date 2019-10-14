import { Component, OnInit } from '@angular/core';
import { ParkingspotbookingService } from '../parkingspotbooking.service';
import { BookingEvict } from '../BookingEvict';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-parkingspot-evict',
  templateUrl: './parkingspot-evict.component.html',
  styleUrls: ['./parkingspot-evict.component.css']
})
export class ParkingspotEvictComponent implements OnInit {
  submitted = false;

 
  bookingEvict: BookingEvict = new BookingEvict();

 
  
  constructor(private route: ActivatedRoute, private router: Router,
    private parkingspotbookingService: ParkingspotbookingService) { }

  ngOnInit() {

  }

  save() {
  
    this.parkingspotbookingService.vacateBooking(this.bookingEvict.vehicleNumber)
      .subscribe(data => console.log(data), error => console.log(error));
  }

  onSubmit() {
    
    console.log("registartionNumber"+this.bookingEvict.vehicleNumber);
    this.submitted = true;
    this.save();
  }

}

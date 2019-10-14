import { Component, OnInit } from '@angular/core';
import { ParkingSpot } from '../ParkingSpot';
import { ParkingspotbookingService } from '../parkingspotbooking.service';

import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs";


@Component({
  selector: 'app-parkingspotbooking-details',
  templateUrl: './parkingspotbooking-details.component.html',
  styleUrls: ['./parkingspotbooking-details.component.css']
})


export class ParkingspotbookingDetailsComponent implements OnInit {

  
  parkingSpots: Observable<ParkingSpot[]>;
  lotId:number;

  constructor(private route: ActivatedRoute,private router: Router,
    private parkingspotbookingService: ParkingspotbookingService) { }

 
  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.lotId = this.route.snapshot.params['lotId'];

     this.parkingspotbookingService.getAvailableSlots(this.lotId)
      .subscribe(data => {
        console.log(data)
        this.parkingSpots  =data;
      }, error => console.log(error));
  
   
  }

  bookingForm(lotId:number){
    console.log('LotId :'+lotId);
    this.router.navigate(['createBooking', lotId]);
  }

}

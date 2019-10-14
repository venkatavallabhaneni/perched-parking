import { Component, OnInit } from '@angular/core';
import { ParkingSpot } from '../ParkingSpot';
import { ActivatedRoute, Router } from '@angular/router';
import { ParkingspotbookingService } from '../parkingspotbooking.service';

@Component({
  selector: 'app-create-parkingspots',
  templateUrl: './create-parkingspots.component.html',
  styleUrls: ['./create-parkingspots.component.css']
})
export class CreateParkingspotsComponent implements OnInit {

  parkingSpot: ParkingSpot = new ParkingSpot();
  submitted = false;
  lotId: number;

  constructor(private route: ActivatedRoute, private router: Router,
    private parkingspotbookingService: ParkingspotbookingService) { }


  ngOnInit() {
    
  }

  save() {
    this.parkingSpot.parkingLotId = this.route.snapshot.params['lotId'];
    
    this.parkingspotbookingService.establishASpot(this.parkingSpot)
      .subscribe(data => console.log(data), error => console.log(error));

  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}

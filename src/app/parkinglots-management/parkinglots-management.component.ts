import { Component, OnInit } from '@angular/core';
import { ParkingLot } from '../ParkingLot';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ParkingspotbookingService } from '../parkingspotbooking.service';

@Component({
  selector: 'app-parkinglots-management',
  templateUrl: './parkinglots-management.component.html',
  styleUrls: ['./parkinglots-management.component.css']
})
export class ParkinglotsManagementComponent implements OnInit {

  parkingLots: Observable<ParkingLot[]>;
  lotId:number;

  constructor(private route: ActivatedRoute,private router: Router,
    private parkingspotbookingService: ParkingspotbookingService) { }

 
  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
   
     this.parkingspotbookingService.getAllLots()
      .subscribe(data => {
        console.log(data)
        this.parkingLots  =data;
      }, error => console.log(error));
  
   
  }

  addSpots(lotId:number){

    console.log('LotId :'+lotId);
    this.router.navigate(['createSpots', lotId]);
  }

}

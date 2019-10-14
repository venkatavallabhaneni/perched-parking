import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParkingspotbookingDetailsComponent } from './parkingspotbooking-details/parkingspotbooking-details.component';
import { CreateSpotbookingComponent } from './create-spotbooking/create-spotbooking.component';
import { ParkinglotsManagementComponent } from './parkinglots-management/parkinglots-management.component';
import { CreateParkingspotsComponent } from './create-parkingspots/create-parkingspots.component';
import { ParkingspotEvictComponent } from './parkingspot-evict/parkingspot-evict.component';


const routes: Routes = [
 
  { path: 'parkingSpots', component: ParkingspotbookingDetailsComponent} ,
  { path: 'createBooking/:lotId', component: CreateSpotbookingComponent} ,
  { path: 'parkingLots', component: ParkinglotsManagementComponent} ,
  { path: 'createSpots/:lotId', component: CreateParkingspotsComponent} ,
  { path: 'vacateParkingSpots', component: ParkingspotEvictComponent} ,
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

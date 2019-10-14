import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CreateSpotbookingComponent } from './create-spotbooking/create-spotbooking.component';
import { ParkingspotbookingDetailsComponent } from './parkingspotbooking-details/parkingspotbooking-details.component';
import { AppRoutingModule } from './app-routing.module';
import { ParkinglotsManagementComponent } from './parkinglots-management/parkinglots-management.component';
import { ParkingspotEvictComponent } from './parkingspot-evict/parkingspot-evict.component';
import { CreateParkingspotsComponent } from './create-parkingspots/create-parkingspots.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateSpotbookingComponent,
    ParkingspotbookingDetailsComponent,
    ParkinglotsManagementComponent,
    ParkingspotEvictComponent,
    CreateParkingspotsComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

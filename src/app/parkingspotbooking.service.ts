import { Injectable } from '@angular/core';
import {BookingQuery} from './BookingQuery';

import { Observable } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ParkingSpot } from './ParkingSpot';
import { BookingCriteria } from './BookingCriteria';
import { Vehicle } from './Vehicle';

@Injectable({
  providedIn: 'root'
})
export class ParkingspotbookingService {

  bookingCriteria: BookingCriteria;
  vehicle: Vehicle;
  parkingSpot: ParkingSpot;
  vehicleNumber:string;
  parkingSpots: Array<ParkingSpot> = [];

  private baseUrl = 'http://localhost:9080/parkingspotmgmt/';

  constructor(private http: HttpClient) { }



  getAllSpots(lotId: number): Observable<any> {

    return this.http.get('http://localhost:9080/parkingspotmgmt/parkingspot/5');
  }

  getAvailableSlots(lotId: number): Observable<any> {

    return this.http.get('http://localhost:9080/parkingspotmgmt/parkingspot/availability/5');
  }

  bookASlot(bookingQuery: BookingQuery): Observable<any> {

    this.bookingCriteria = new BookingCriteria();

    this.bookingCriteria.lotId = bookingQuery.lotId;

    this.vehicle = new Vehicle();
    this.vehicle.ownerName=bookingQuery.ownerName;
    this.vehicle.vehicleNumber=bookingQuery.vehicleNumber;
    this.vehicle.vehicleType=bookingQuery.vehicleType;
    
    this.bookingCriteria.vehicleDto=this.vehicle;

    console.log("bookingCriteria :: "+JSON.stringify(this.bookingCriteria) );

    return this.http.post('http://localhost:9080/parkingspotmgmt/parkingspot/book', this.bookingCriteria);

    
  }

  establishASpot(parkingSpot: ParkingSpot): Observable<any> {

    this.parkingSpots.push(parkingSpot);

    console.log("bookingCriteria :: "+JSON.stringify(this.parkingSpots) );
    return this.http.post('http://localhost:9080/parkingspotmgmt/parkingspot', this.parkingSpots);

  }

  vacateBooking(vehicleNumber: string): Observable<any> {

    this.vehicleNumber=vehicleNumber;
    
    return this.http.post('http://localhost:9080/parkingspotmgmt/parkingspot/'+this.vehicleNumber,null);

  }

  getAllLots(): Observable<any>{
    return this.http.get('http://localhost:9080/parkingspotmgmt/parkinglot');
  }


}

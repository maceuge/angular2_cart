import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.services';
import {Vehicle, VehicleService} from '../../services/vehicle.service';
import {SpinnerService} from '../../services/spinner.service';

@Component ({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [AuthService, VehicleService, SpinnerService]
})

export class WelcomeComponent implements OnInit {

  vehicles: Vehicle[];

  personaje = {
    nombre: "",
    edad: 38,
    raza: "Leon"
  }

  isSelected = false;

  constructor (
    private auth: AuthService,
    private _vehicleService: VehicleService,
    private _spinner: SpinnerService,
  ) {}

  getVehicleList () {
    this._vehicleService.getVehiclesJson()
      .subscribe(vehicles => this.vehicles = vehicles);
  }

  getDataSubscribe() {
    return this._vehicleService.getVehiclesJson();
  }

  select () {
    this.isSelected = !this.isSelected;
    console.log(this.isSelected);
  }

  ngOnInit (){
    this.auth.checkSession();
    this.getVehicleList();
    this._spinner.show();
    // console.log(this.getVehicleList());
  }

}

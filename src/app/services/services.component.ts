import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../shared/services/services.service';
import { ServiceInterface } from '../shared/interfaces/service-detail.interface';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent {
  services: ServiceInterface[];

  constructor(private router: Router, private service: ServicesService){
    this.services = this.service.services;
  }

  viewServiceDetails(service:ServiceInterface){
    this.service.selectedService = service;
    // this.router.navigate(['services/service',service.id])
  }

}

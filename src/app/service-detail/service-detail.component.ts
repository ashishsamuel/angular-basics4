import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServiceInterface } from '../shared/interfaces/service-detail.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../shared/services/services.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit, OnDestroy{

  selectedService: ServiceInterface;
  serviceId: number;
  allServices: ServiceInterface[];
  paramMapObs;


  constructor(private activatedRoute: ActivatedRoute,private service: ServicesService){}

  ngOnInit() {
    this.allServices = this.service.services;

    // this.selectedService = this.service.selectedService;
    // for accesing the route paramter we need to use below (old way) 
    // this.serviceId = this.activatedRoute.snapshot.params['id'];

    // for accesing the route paramter we need to use below (new way) 
    // the problem with the below method is when id value changes there is no updation track happening and the initial value will be
    // inside the snapshot property so to resolve this issue we need to use an observable inside activatedroute 
    // this.serviceId = +this.activatedRoute.snapshot.paramMap.get('id'); 
    // console.log("service id which we have clicked",this.serviceId);

    // 
    
    // for getting updated values of route paramters using paramMap observable
    this.paramMapObs = this.activatedRoute.paramMap.subscribe((param)=>{
      console.log("param",param);
      if(param['params'].hasOwnProperty('id')){
        this.serviceId = +param.get('id');
        console.log("serviceid",this.serviceId);
        
        if(this.serviceId >0 && this.serviceId<=this.service.services.length){
          this.selectedService = this.service.services.find(serv=>serv.id==this.serviceId)
        console.log("selectedService",this.selectedService);
        }
        
      }
    })
    console.log("service id which we have clicked",this.serviceId);

    // filtering the services list using the serviceid which we have obtained from the route paramter
    // this.selectedService = this.service.services.find(serv=>serv.id==this.serviceId)
    // console.log("selectedService",this.selectedService);
    
    
  }

   ngOnDestroy(): void {
    this.paramMapObs.unsubscribe();
    console.log("unsubsribing");
    
  }

}

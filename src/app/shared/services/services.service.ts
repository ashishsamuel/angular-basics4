import { Injectable } from '@angular/core';
import { ServiceInterface } from '../interfaces/service-detail.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  selectedService: ServiceInterface;

  constructor() { }

  services:ServiceInterface[] = [
    {id:1, title:'Helping Adults',name:'John',time:'6hrs'},
    {id:2, title:'Cleaning home',name:'Sevin',time:'9hrs'},
    {id:3, title:'Driving people',name:'Joe',time:'10hrs'},
  ]
}

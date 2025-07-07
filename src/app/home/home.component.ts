import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router,private activeRoute: ActivatedRoute){}

  // or
  // router: Router = inject(Router);
  // router: activeRoute = inject(ActivatedRoute);

  navigateToAboutPage(){
    // navigate method which accepts argument as an array
    // this.router.navigate(['about']);
    // navigateByUrl method which accepts the whole route segments as a string 
    // this.router.navigateByUrl('about');

    // considering relative path
    // we need to route to the about route relative to the currently active route
    this.router.navigate(['about'], {relativeTo:this.activeRoute})

  // and the above route will result in an 404 component as the resultant route will be localhost:4200/home/about

    console.log("activeRoute",this.activeRoute);
    
  }

}

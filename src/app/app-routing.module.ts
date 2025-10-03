import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'services', component: ServicesComponent},
  // so the value which we pass from the routing after the services/service will be assigned to the id route paramter
  // and multiple route parameters can be defined in the same route like below :-
  // path:'services/service/:id/:name
  {path:'services/service/:id', component: ServiceDetailComponent},
  {path:'pipes', component: PipesComponent},

  // wildcard routing for a route not in the above list
  {path:'**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { FilterComponent } from './filter/filter.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path :'home',
    component:HomeComponent
    
  },
  {
    path :'filter',
    component:FilterComponent
    
  },
  {
    path :'cart',
    component:CartComponent
    
  },
  {
    path :'details',
    component:DetailsComponent
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

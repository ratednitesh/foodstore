import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MealsComponent } from './main-body/meals/meals.component';
import { AlaCarteComponent } from './main-body/ala-carte/ala-carte.component';
import { CartComponent } from './cart/cart.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { AdminComponent } from './admin/admin.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainBodyComponent }, 
  { path: 'meals', component: MealsComponent }, 
  { path: 'cart', component: CartComponent }, 
  { path: 'alaCarte', component: AlaCarteComponent }, 
  { path: 'construct', component: UnderConstructionComponent }, 
  { path: 'admin', component: AdminComponent },
  { path: '**', component: ErrorPageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainBodyComponent,
    ErrorPageComponent,
    MealsComponent,
    AlaCarteComponent,
    CartComponent,
    UnderConstructionComponent,
    AdminComponent
   
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

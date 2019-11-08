import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { TravelsPageComponent } from './travels-page/travels-page.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerService } from "./shared/customer.service";
import { ReservationPageComponent } from './reservation-page/reservation-page.component';




@NgModule({
 declarations: [
   AppComponent,
   NavbarComponent,
   HomePageComponent,
   BlogPageComponent,
   TravelsPageComponent,
   CustomerComponent,
   CustomerListComponent,
   ReservationPageComponent,
   
 ],
 imports: [
   BrowserModule,
   AppRoutingModule,
   ReactiveFormsModule,
 
   AngularFireModule.initializeApp(environment.firebaseConfig),
   AngularFireDatabaseModule,FormsModule
 ],
 providers: [CustomerService],
 bootstrap: [AppComponent]
})
export class AppModule { }
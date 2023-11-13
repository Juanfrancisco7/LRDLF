import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { LocationComponent } from './components/location/location.component';
import { ServicesComponent } from './components/services/services.component';



@NgModule({
  declarations: [
    HomeComponent,
    IntroductionComponent,
    LocationComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class HomeModule { }

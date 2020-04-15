import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComedymoviePageRoutingModule } from './comedymovie-routing.module';

import { ComedymoviePage } from './comedymovie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComedymoviePageRoutingModule
  ],
  declarations: [ComedymoviePage]
})
export class ComedymoviePageModule {}

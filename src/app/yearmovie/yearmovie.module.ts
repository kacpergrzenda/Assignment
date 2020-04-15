import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YearmoviePageRoutingModule } from './yearmovie-routing.module';

import { YearmoviePage } from './yearmovie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YearmoviePageRoutingModule
  ],
  declarations: [YearmoviePage]
})
export class YearmoviePageModule {}

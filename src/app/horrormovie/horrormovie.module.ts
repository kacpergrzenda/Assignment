import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorrormoviePageRoutingModule } from './horrormovie-routing.module';

import { HorrormoviePage } from './horrormovie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorrormoviePageRoutingModule
  ],
  declarations: [HorrormoviePage]
})
export class HorrormoviePageModule {}

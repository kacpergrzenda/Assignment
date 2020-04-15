import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrimemoviePageRoutingModule } from './crimemovie-routing.module';

import { CrimemoviePage } from './crimemovie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrimemoviePageRoutingModule
  ],
  declarations: [CrimemoviePage]
})
export class CrimemoviePageModule {}

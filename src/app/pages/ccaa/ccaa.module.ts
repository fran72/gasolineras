import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CcaaPageRoutingModule } from './ccaa-routing.module';

import { CcaaPage } from './ccaa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CcaaPageRoutingModule
  ],
  declarations: [CcaaPage]
})
export class CcaaPageModule {}

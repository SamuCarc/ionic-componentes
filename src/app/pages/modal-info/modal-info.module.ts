import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { ModalInfoPage } from './modal-info.page';
import { ModalInfoPageRoutingModule } from './modal-info-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalInfoPageRoutingModule
  ],
  declarations: [ModalInfoPage]
})
export class ModalInfoPageModule {}

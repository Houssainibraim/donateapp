import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditingPageRoutingModule } from './editing-routing.module';

import { EditingPage } from './editing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditingPageRoutingModule
  ],
  declarations: [EditingPage]
})
export class EditingPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeminarioPage } from './seminario';

@NgModule({
  declarations: [
    SeminarioPage,
  ],
  imports: [
    IonicPageModule.forChild(SeminarioPage),
  ],
})
export class SeminarioPageModule {}

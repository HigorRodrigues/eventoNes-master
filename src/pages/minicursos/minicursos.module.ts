import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MinicursosPage } from './minicursos';

@NgModule({
  declarations: [
    MinicursosPage,
  ],
  imports: [
    IonicPageModule.forChild(MinicursosPage),
  ],
})
export class MinicursosPageModule {}

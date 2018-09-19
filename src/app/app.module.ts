import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {GeralPage} from '../pages/geral/geral';
import {PalestrasMinicursosPage} from '../pages/palestras-minicursos/palestras-minicursos'
import {SessaoTecnicaPage} from '../pages/sessao-tecnica/sessao-tecnica';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GeralPage,
    PalestrasMinicursosPage,
    SessaoTecnicaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GeralPage,
    PalestrasMinicursosPage,
    SessaoTecnicaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

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
import { ExpandableComponent } from '../components/expandable/expandable';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { ApresentacaoOralPage } from '../pages/apresentacao-oral/apresentacao-oral';
import { ApresentacaoPosterPage } from '../pages/apresentacao-poster/apresentacao-poster';
import { SessaoTecnica2Page } from '../pages/sessao-tecnica2/sessao-tecnica2';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GeralPage,
    PalestrasMinicursosPage,
    SessaoTecnicaPage,
    ApresentacaoOralPage,
    ApresentacaoPosterPage,
    SessaoTecnica2Page,
    ExpandableComponent
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
    ApresentacaoOralPage,
    ApresentacaoPosterPage,
    SessaoTecnica2Page,
    SessaoTecnicaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

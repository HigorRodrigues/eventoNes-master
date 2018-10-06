import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';


/**
 * Generated class for the GeralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-geral',
  templateUrl: 'geral.html',
})
export class GeralPage {

  listGeral = [];
  dia;

  constructor(private screenOrientation: ScreenOrientation, public navCtrl: NavController, public navParams: NavParams) {
    this.listGeral = navParams.get('lista');
    this.dia = navParams.get('dia');  
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);
  }
}
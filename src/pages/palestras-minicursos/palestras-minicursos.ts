import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PalestrasMinicursosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-palestras-minicursos',
  templateUrl: 'palestras-minicursos.html',
})
export class PalestrasMinicursosPage {

  listDAY = [];



  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.listDAY  = navParams.get('lista');
     console.log(this.listDAY);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PalestrasMinicursosPage');
  }

}

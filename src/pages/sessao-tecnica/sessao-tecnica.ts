import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SessaoTecnicaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sessao-tecnica',
  templateUrl: 'sessao-tecnica.html',
})
export class SessaoTecnicaPage {

  sessionList = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sessionList  = navParams.get('lista');
     console.log(this.sessionList);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SessaoTecnicaPage');
  }

}

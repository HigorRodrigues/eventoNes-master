import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


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
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.listGeral = navParams.get('lista');
     console.log(this.listGeral);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeralPage');
  }

 

}

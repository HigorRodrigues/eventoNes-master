import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ApresentacaoPosterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apresentacao-poster',
  templateUrl: 'apresentacao-poster.html',
})
export class ApresentacaoPosterPage {

  lista: any;
  nomeTitulo: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lista = navParams.get('poster');
    this.nomeTitulo = navParams.get('nome');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApresentacaoPosterPage');
  }

}

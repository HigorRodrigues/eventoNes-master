import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

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
  dia: string;
  posterSelecionado: string;

  constructor(private screenOrientation: ScreenOrientation, public navCtrl: NavController, public navParams: NavParams) {
    this.lista = navParams.get('poster');
    this.nomeTitulo = navParams.get('nome');
    this.dia = navParams.get('dia');
    this.posterSelecionado = navParams.get('posterSelecionado');
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApresentacaoPosterPage');
  }

}

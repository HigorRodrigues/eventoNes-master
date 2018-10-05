import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-apresentacao-oral',
  templateUrl: 'apresentacao-oral.html',
})
export class ApresentacaoOralPage {

  lista: any;
  nomeTitulo: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lista = navParams.get('sessao');
    this.nomeTitulo = navParams.get('nome');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApresentacaoOralPage');
  }

}

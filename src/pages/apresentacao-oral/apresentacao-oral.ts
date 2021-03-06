import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@IonicPage()
@Component({
  selector: 'page-apresentacao-oral',
  templateUrl: 'apresentacao-oral.html',
})
export class ApresentacaoOralPage {

  lista: any;
  nomeTitulo: string;
  dia: string;
  sessaoSelecionada: string;

  constructor(private screenOrientation: ScreenOrientation, public navCtrl: NavController, public navParams: NavParams) {
    this.lista = navParams.get('sessao');
    this.nomeTitulo = navParams.get('nome');
    this.dia = navParams.get('dia');
    this.sessaoSelecionada = navParams.get('sessaoSelecionada');
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApresentacaoOralPage');
  }

}

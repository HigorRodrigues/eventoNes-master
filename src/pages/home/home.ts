import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  valores = [{titulo: 'Testes 1', corpo: 'Lorem ipsum teste Lorem ipsum teste Lorem ipsum teste ', horario: '12:30', sala: 10},
    {titulo: 'Testes 2', corpo: 'Lorem ipsum teste Lorem ipsum teste Lorem ipsum teste ', horario: '12:30', sala: 10}, 
    {titulo: 'Testes 3', corpo: 'Lorem ipsum teste Lorem ipsum teste Lorem ipsum teste ', horario: '12:30', sala: 10}];

  constructor(public navCtrl: NavController) {
    
  }

}

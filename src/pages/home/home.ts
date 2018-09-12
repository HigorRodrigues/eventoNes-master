import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lista = [];

  dia8 = [{titulo: 'Testes 1', corpo: 'Lorem ipsum teste Lorem ipsum teste Lorem ipsum teste ', horario: '12:30', sala: 10},
    {titulo: 'Testes 2', corpo: 'Lorem ipsum teste Lorem ipsum teste Lorem ipsum teste ', horario: '12:30', sala: 10}, 
    {titulo: 'Testes 3', corpo: 'Lorem ipsum teste Lorem ipsum teste Lorem ipsum teste ', horario: '12:30', sala: 10}];

  dia9 = [{titulo: 'Novo 1', corpo: 'Lorem ipsum teste Lorem ipsum teste Lorem ipsum teste ', horario: '12:30', sala: 10},
    {titulo: 'Novo 2', corpo: 'Lorem ipsum teste Lorem ipsum teste Lorem ipsum teste ', horario: '12:30', sala: 10}, 
    {titulo: 'Novo 3', corpo: 'Lorem ipsum teste Lorem ipsum teste Lorem ipsum teste ', horario: '12:30', sala: 10}];

  dia10 = [{titulo: 'Evento 1', corpo: 'Lorem ipsum teste Lorem ipsum teste Lorem ipsum teste ', horario: '12:30', sala: 10},
    {titulo: 'Evento 2', corpo: 'Lorem ipsum teste Lorem ipsum teste Lorem ipsum teste ', horario: '12:30', sala: 10}, 
    {titulo: 'Evento 3', corpo: 'Lorem ipsum teste Lorem ipsum teste Lorem ipsum teste ', horario: '12:30', sala: 10}];

  select = ["Opcao1", "Opcao2", "Opcao3", "Opcao4", "Opcao5", "Opcao6"];

  data: string;
  categoria: string;

  showPalestras(event): void{
 /*  palestrasEminicursos = [{titulo: 'Testes 1', corpo: 'Lorem ipsum teste Lorem ipsum teste Lorem ipsum teste ', horario: '12:30', sala: 10},
    {titulo: 'Testes 2', corpo: 'Lorem ipsum teste Lorem ipsum teste Lorem ipsum teste ', horario: '12:30', sala: 10}, 
    {titulo: 'Testes 3', corpo: 'Lorem ipsum teste Lorem ipsum teste Lorem ipsum teste ', horario: '12:30', sala: 10}];*/
  }

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
    
    const loader = this.loadingCtrl.create({
      content: "Iniciando...",
      duration: 3000
    });
    loader.present();
  }

  limparLista(event){

    this.lista = [];
  }

  palestrasEminucursos(event){
    if(this.data == "dia8"){
      this.lista = this.dia8;
    }
    else if(this.data == "dia9"){
      this.lista = this.dia9;
    }
    else if(this.data == "dia10"){
      this.lista = this.dia10;
    }
  }

  selectCategoria($event, cat){
    console.log("Categoria selecionada: " + cat);
    console.log("Data selecionada: " + this.data);
  }
}

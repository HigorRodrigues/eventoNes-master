import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-sessao-tecnica',
  templateUrl: 'sessao-tecnica.html',
})
export class SessaoTecnicaPage {
      
  sessionList = [];
  dia;
  
  items: any = [];
  
  sessao1: any = [];
  sessao2: any = [];
  sessao3: any = [];
  sessao4: any = [];

  itemExpandHeight: number = 100;

  tituloSessao1: any = [
    {nome: "Sala 1 – Otimização e Pesquisa Operacional", expanded: false},
    {nome: "Sala 2 – Matemática Aplicada", expanded: false},
    {nome: "Sala 3 – Fenômeno dos Transportes", expanded: false},
    {nome: "Sala 4 – Métodos Computacionais", expanded: false},
    {nome: "Auditório – Matemática Aplicada", expanded: false}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sessao1 = [{nome: "Sessão 1", horario: "8h15 às 10h"}];
    this.sessao2 = [{nome: "Sessão 2", horario: "11h às 12h30"}];
    this.sessao3 = [{nome: "Sessão 3", horario: "14h às 15h"}];
    this.sessao4 = [{nome: "Sessão 4", horario: "17h às 18h15"}];
    
    this.items = [
      {expanded: false},
      {expanded: false},
      {expanded: false},
      {expanded: false},      
    ];

    this.sessionList  = navParams.get('lista');
    this.dia = navParams.get('dia');
  }

  expandItem(item){
 
    this.tituloSessao1.map((listItem) => {

        if(item == listItem){
            listItem.expanded = !listItem.expanded;
        } else {
            listItem.expanded = false;
        }
        return listItem;
    });
}

}

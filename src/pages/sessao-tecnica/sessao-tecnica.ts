import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-sessao-tecnica',
  templateUrl: 'sessao-tecnica.html',
})
export class SessaoTecnicaPage {
 
  tipoSessao: string = "orais";
  sessionList = [];
  dia;
 
  lista: any;
    
  tituloSessao1Sala1 = [
    {horaInicio: "8h15", horaFim: "8h30", titulo: "Titulo 1"},
    {horaInicio: "8h30", horaFim: "8h45", titulo: "Titulo 2"},
    {horaInicio: "8h45", horaFim: "9h", titulo: "Titulo 3"},
    {horaInicio: "9h", horaFim: "9h15", titulo: "Titulo 4"},
    {horaInicio: "9h15", horaFim: "9h30", titulo: "Titulo 5"},
    {horaInicio: "9h30", horaFim: "9h45", titulo: "Titulo 6"},
    {horaInicio: "9h45", horaFim: "10h", titulo: "Titulo 7"}
  ];
  
  tituloSessao1Sala2 = [
    {horaInicio: "8h15", horaFim: "8h30", titulo: "Titulo 1"},
    {horaInicio: "8h30", horaFim: "8h45", titulo: "Titulo 2"},
    {horaInicio: "8h45", horaFim: "9h", titulo: "Titulo 3"},
    {horaInicio: "9h", horaFim: "9h15", titulo: "Titulo 4"},
    {horaInicio: "9h15", horaFim: "9h30", titulo: "Titulo 5"},
    {horaInicio: "9h30", horaFim: "9h45", titulo: "Titulo 6"},
    {horaInicio: "9h45", horaFim: "10h", titulo: "Titulo 7"}
  ]

  tituloSessao1Sala3 = [ 
    {horaInicio: "8h15", horaFim: "8h30", titulo: "Titulo 1"},
    {horaInicio: "8h30", horaFim: "8h45", titulo: "Titulo 2"},
    {horaInicio: "8h45", horaFim: "9h", titulo: "Titulo 3"},
    {horaInicio: "9h", horaFim: "9h15", titulo: "Titulo 4"},
    {horaInicio: "9h15", horaFim: "9h30", titulo: "Titulo 5"},
    {horaInicio: "9h30", horaFim: "9h45", titulo: "Titulo 6"},
    {horaInicio: "9h45", horaFim: "10h", titulo: "Titulo 7"}
  ];

  tituloSessao1Sala4 = [
    {horaInicio: "8h15", horaFim: "8h30", titulo: "Titulo 1"},
    {horaInicio: "8h30", horaFim: "8h45", titulo: "Titulo 2"},
    {horaInicio: "8h45", horaFim: "9h", titulo: "Titulo 3"},
    {horaInicio: "9h", horaFim: "9h15", titulo: "Titulo 4"},
    {horaInicio: "9h15", horaFim: "9h30", titulo: "Titulo 5"},
    {horaInicio: "9h30", horaFim: "9h45", titulo: "Titulo 6"},
    {horaInicio: "9h45", horaFim: "10h", titulo: "Titulo 7"}
  ];

  tituloSessao1Audi = [ 
    {horaInicio: "8h15", horaFim: "8h30", titulo: "Titulo 1"},
    {horaInicio: "8h30", horaFim: "8h45", titulo: "Titulo 2"},
    {horaInicio: "8h45", horaFim: "9h", titulo: "Titulo 3"},
    {horaInicio: "9h", horaFim: "9h15", titulo: "Titulo 4"},
    {horaInicio: "9h15", horaFim: "9h30", titulo: "Titulo 5"},
    {horaInicio: "9h30", horaFim: "9h45", titulo: "Titulo 6"},
    {horaInicio: "9h45", horaFim: "10h", titulo: "Titulo 7"}
  ];

  tituloOral1 = [
    {nome: "Sala 1 – Otimização e Pesquisa Operacional", expanded: false, variavel: this.tituloSessao1Sala1},
    {nome: "Sala 2 – Matemática Aplicada", expanded: false, variavel: this.tituloSessao1Sala2},
    {nome: "Sala 3 – Fenômeno dos Transportes", expanded: false, variavel: this.tituloSessao1Sala3},
    {nome: "Sala 4 – Métodos Computacionais", expanded: false, variavel: this.tituloSessao1Sala4},
    {nome: "Auditório – Matemática Aplicada", expanded: false, variavel: this.tituloSessao1Audi}
  ];        

  tituloSessao2Sala1 = [
    {horaInicio: "11h", horaFim: "11h15", titulo: "Titulo 1"},
    {horaInicio: "11h15", horaFim: "11h30", titulo: "Titulo 2"},
    {horaInicio: "11h30", horaFim: "11h45", titulo: "Titulo 3"},
    {horaInicio: "11h45", horaFim: "12h", titulo: "Titulo 4"},
    {horaInicio: "12h", horaFim: "12h15", titulo: "Titulo 5"},
    {horaInicio: "12h15", horaFim: "12h30", titulo: "Titulo 6"}
  ];
  
  tituloSessao2Sala2 = [
    {horaInicio: "11h", horaFim: "11h15", titulo: "Titulo 1"},
    {horaInicio: "11h15", horaFim: "11h30", titulo: "Titulo 2"},
    {horaInicio: "11h30", horaFim: "11h45", titulo: "Titulo 3"},
    {horaInicio: "11h45", horaFim: "12h", titulo: "Titulo 4"},
    {horaInicio: "12h", horaFim: "12h15", titulo: "Titulo 5"},
    {horaInicio: "12h15", horaFim: "12h30", titulo: "Titulo 6"}
  ]

  tituloSessao2Sala3 = [ 
    {horaInicio: "11h", horaFim: "11h15", titulo: "Titulo 1"},
    {horaInicio: "11h15", horaFim: "11h30", titulo: "Titulo 2"},
    {horaInicio: "11h30", horaFim: "11h45", titulo: "Titulo 3"},
    {horaInicio: "11h45", horaFim: "12h", titulo: "Titulo 4"},
    {horaInicio: "12h", horaFim: "12h15", titulo: "Titulo 5"},
    {horaInicio: "12h15", horaFim: "12h30", titulo: "Titulo 6"}
  ];

  tituloSessao2Sala4 = [
    {horaInicio: "11h", horaFim: "11h15", titulo: "Titulo 1"},
    {horaInicio: "11h15", horaFim: "11h30", titulo: "Titulo 2"},
    {horaInicio: "11h30", horaFim: "11h45", titulo: "Titulo 3"},
    {horaInicio: "11h45", horaFim: "12h", titulo: "Titulo 4"},
    {horaInicio: "12h", horaFim: "12h15", titulo: "Titulo 5"},
    {horaInicio: "12h15", horaFim: "12h30", titulo: "Titulo 6"}
  ];

  tituloSessao2Audi = [ 
    {horaInicio: "11h", horaFim: "11h15", titulo: "Titulo 1"},
    {horaInicio: "11h15", horaFim: "11h30", titulo: "Titulo 2"},
    {horaInicio: "11h30", horaFim: "11h45", titulo: "Titulo 3"},
    {horaInicio: "11h45", horaFim: "12h", titulo: "Titulo 4"},
    {horaInicio: "12h", horaFim: "12h15", titulo: "Titulo 5"},
    {horaInicio: "12h15", horaFim: "12h30", titulo: "Titulo 6"}
  ];

  tituloOral2 = [
    {nome: "Sala 1 – Otimização e Pesquisa Operacional", expanded: false, variavel: this.tituloSessao2Sala1},
    {nome: "Sala 2 – Métodos Computacionais", expanded: false, variavel: this.tituloSessao2Sala2},
    {nome: "Sala 3 – Fenômeno dos Transportes", expanded: false, variavel: this.tituloSessao2Sala3},
    {nome: "Sala 4 – Métodos Computacionais", expanded: false, variavel: this.tituloSessao2Sala4},
    {nome: "Auditório – Aplicações em Engenharia Biomédica", expanded: false, variavel: this.tituloSessao2Audi}
  ];

  tituloSessao3Sala1 = [
    {horaInicio: "14h", horaFim: "14h15", titulo: "Titulo 1"},
    {horaInicio: "14h15", horaFim: "14h30", titulo: "Titulo 2"},
    {horaInicio: "14h30", horaFim: "14h45", titulo: "Titulo 3"},
    {horaInicio: "14h45", horaFim: "15h", titulo: "Titulo 4"},
  ];
  
  tituloSessao3Sala2 = [
    {horaInicio: "14h", horaFim: "14h15", titulo: "Titulo 1"},
    {horaInicio: "14h15", horaFim: "14h30", titulo: "Titulo 2"},
    {horaInicio: "14h30", horaFim: "14h45", titulo: "Titulo 3"},
    {horaInicio: "14h45", horaFim: "15h", titulo: "Titulo 4"},
  ]

  tituloSessao3Sala3 = [ 
    {horaInicio: "14h", horaFim: "14h15", titulo: "Titulo 1"},
    {horaInicio: "14h15", horaFim: "14h30", titulo: "Titulo 2"},
    {horaInicio: "14h30", horaFim: "14h45", titulo: "Titulo 3"},
    {horaInicio: "14h45", horaFim: "15h", titulo: "Titulo 4"},
  ];

  tituloSessao3Sala4 = [
    {horaInicio: "14h", horaFim: "14h15", titulo: "Titulo 1"},
    {horaInicio: "14h15", horaFim: "14h30", titulo: "Titulo 2"},
    {horaInicio: "14h30", horaFim: "14h45", titulo: "Titulo 3"},
    {horaInicio: "14h45", horaFim: "15h", titulo: "Titulo 4"},
  ];

  tituloSessao3Audi = [ 
    {horaInicio: "14h", horaFim: "14h15", titulo: "Titulo 1"},
    {horaInicio: "14h15", horaFim: "14h30", titulo: "Titulo 2"},
    {horaInicio: "14h30", horaFim: "14h45", titulo: "Titulo 3"},
    {horaInicio: "14h45", horaFim: "15h", titulo: "Titulo 4"},
  ];

  tituloOral3 = [
    {nome: "Sala 1 – Processos Estocásticos", expanded: false, variavel: this.tituloSessao3Sala1},
    {nome: "Sala 2 – Matemática Aplicada", expanded: false, variavel: this.tituloSessao3Sala2},
    {nome: "Sala 3 – Aplicações em Engenharia Biomédica", expanded: false, variavel: this.tituloSessao3Sala3},
    {nome: "Sala 4 – Métodos Comput. e Computação de Alto Desempenho", expanded: false, variavel: this.tituloSessao3Sala4},
    {nome: "Auditório – Acústica e Vibrações", expanded: false, variavel: this.tituloSessao3Audi}
  ];

  tituloSessao4Sala1 = [
    {horaInicio: "17h", horaFim: "17h15", titulo: "Titulo 1"},
    {horaInicio: "17h15", horaFim: "17h30", titulo: "Titulo 2"},
    {horaInicio: "17h30", horaFim: "17h45", titulo: "Titulo 3"},
    {horaInicio: "17h45", horaFim: "18h", titulo: "Titulo 4"},
    {horaInicio: "18h", horaFim: "18h15", titulo: "Titulo 1"}
  ];
  
  tituloSessao4Sala2 = [
    {horaInicio: "17h", horaFim: "17h15", titulo: "Titulo 1"},
    {horaInicio: "17h15", horaFim: "17h30", titulo: "Titulo 2"},
    {horaInicio: "17h30", horaFim: "17h45", titulo: "Titulo 3"},
    {horaInicio: "17h45", horaFim: "18h", titulo: "Titulo 4"},
    {horaInicio: "18h", horaFim: "18h15", titulo: "Titulo 1"}
  ]

  tituloSessao4Sala3 = [ 
    {horaInicio: "17h", horaFim: "17h15", titulo: "Titulo 1"},
    {horaInicio: "17h15", horaFim: "17h30", titulo: "Titulo 2"},
    {horaInicio: "17h30", horaFim: "17h45", titulo: "Titulo 3"},
    {horaInicio: "17h45", horaFim: "18h", titulo: "Titulo 4"},
    {horaInicio: "18h", horaFim: "18h15", titulo: "Titulo 1"}
  ];

  tituloSessao4Sala4 = [
    {horaInicio: "17h", horaFim: "17h15", titulo: "Titulo 1"},
    {horaInicio: "17h15", horaFim: "17h30", titulo: "Titulo 2"},
    {horaInicio: "17h30", horaFim: "17h45", titulo: "Titulo 3"},
    {horaInicio: "17h45", horaFim: "18h", titulo: "Titulo 4"},
    {horaInicio: "18h", horaFim: "18h15", titulo: "Titulo 1"}
  ];

  tituloOral4 = [
    {nome: "Sala 1 – Aplicações em Engenharia Química", expanded: false, variavel: this.tituloSessao4Sala1},
    {nome: "Sala 2 – Modelagem, Simulação e Controle de Processos", expanded: false, variavel: this.tituloSessao4Sala2},
    {nome: "Sala 3 – Aplicações em Engenharia Química", expanded: false, variavel: this.tituloSessao4Sala3},
    {nome: "Sala 4 – Modelagem, Simulação e Controle de Processos", expanded: false, variavel: this.tituloSessao4Sala4},
  ];

  sessao1 = [{nome: "Sessão 1", horario: "8h15 às 10h", oral: this.tituloOral1}];
  sessao2 = [{nome: "Sessão 2", horario: "11h às 12h30", oral: this.tituloOral2}];
  sessao3 = [{nome: "Sessão 3", horario: "14h às 15h", oral: this.tituloOral3}];
  sessao4 = [{nome: "Sessão 4", horario: "17h às 18h15", oral: this.tituloOral4}];

  teste = [
    {sessao: this.sessao1},
    {sessao: this.sessao2},
    {sessao: this.sessao3},
    {sessao: this.sessao4}
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {    

    this.sessionList  = navParams.get('lista');
    this.dia = navParams.get('dia');
  }

  expandItemOral(items, item){
    items.map((listItem) => {
      if(item == listItem){
        listItem.expanded = !listItem.expanded;
        this.lista = item.variavel;
      } else {
        listItem.expanded = false;
      }
      return listItem;
    });
  }
}
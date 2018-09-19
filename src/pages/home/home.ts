import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import {GeralPage} from '../geral/geral';
import {PalestrasMinicursosPage} from '../palestras-minicursos/palestras-minicursos';
import {SessaoTecnicaPage} from '../sessao-tecnica/sessao-tecnica';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

                                                                                                                              
  
})
export class HomePage {

  lista = [];

  palestrasEminicursosD8 = [{ titulo: "Minicurso 1", corpo: '“Introdução ao Uso do MOHID Studio para Estudo Hidrológico”', horario: '8h - 12h30', sala: '' }
    , { titulo: 'Minicurso 2', corpo: '“SciLab: Introdução e Aplicação”', horario: '08h - 12h30', sala: '' }
    , { titulo: 'Palestra de Abertura', corpo: '“Desafios da Ciência”', horario: '14h30 - 15h30', sala: '' }
    , { titulo: 'Palestra em Modelagem Computacional', corpo: '“Modelagem Computacional do Comportamento dos Tecidos do Corpo Humano”', horario: '16h - 17h', sala: '' }
    , { titulo: 'Palestra em Ciência e Tecnologia de Materias', corpo: '“Modelagem Numérica de Falha de Materiais: O Caso da Propagação Estável de Trincas”', horario: '17h - 18h', sala: '' }]

  palestrasEminicursosD9 = [{ titulo: 'Palestra 1', corpo: '"Polo de Inovação do IFFluminense no Modelo Embrapii: como a Modelagem Computacional e a Tecnologia dos Materiais podem contribuir na execução dos projetos"', horario: '10h - 11h', sala: '' }
    , { titulo: 'Palestra de Sessão', corpo: '“Espectroscopia Fotoacústica: Breve Introdução e Algumas Aplicações”', horario: '14h - 14h30', sala: '' }
    , { titulo: 'Palestra 2', corpo: '“MDO: An Outstanding Methodology For Aircraft Design”', horario: '16h – 17h', sala: '' }]

    palestrasEminicursosD10 = [{titulo: 'Palestra 3', corpo: '“O Algoritmo de Colisão de Partículas (PCA) ”', horario: '10h – 11h', sala:''}
    , {titulo: 'Palestra de Sessão', corpo: ': “Modelagem (Agro)ambiental: Avanços e Urgências nos Estudos sobre Agrotóxicos"', horario: '14h - 14h30', sala:''}
    , {titulo: 'Palestra 4', corpo: '“Problemas Inversos em Dinâmica e Vibrações: Modelagem e Estimação de Parâmetros”', horario: '16h - 17h', sala:''}
    , {titulo: 'Palestra 5', corpo: '“Análise Multicritério”', horario: '17h - 18h', sala:''}]  

    sessaotecnicaD9 = [{titulo: 'Espectroscopia Fotoacústica: Breve Introdução e Algumas Aplicações', corpo: 'Noberto Cella – Professor do IPRJ/UERJ', horario: '', sala: ''}];

    sessaotecnicaD10 = [{titulo: '“Modelagem (Agro)ambiental: Avanços e Urgências nos Estudos sobre Agrotóxicos', 
      corpo: 'Mônica Santana Vianna - Pós-Doutoranda do IPRJ/UERJ - João Paulo Torres – Professor da UFRJ', horario: '', sala: ''}
    ];

    dia8 = [{titulo: 'Credenciamento', corpo:'Credenciamento do XXI ENMC e IX ECTM', horario:'8h - 12h30', sala: ''},
    { titulo: 'Cerimônia de Abertura', corpo: 'Cerimônia de Abertura do ' + 
    'XXI Encontro Nacional de Modelagem Computacional e IX Encontro de Ciência e Tecnologia dos Materiais', horario: '14h - 14:30', sala: '' },
    { titulo: 'Coffee Break', corpo: '', horario: '15h30 - 16h', sala: '' },
    { titulo: 'Painel 1', corpo: '“As aplicações da Modelagem Computacional na Física”', horario: '15h30 - 16h', sala: '' },
    { titulo: 'Coquetel de Boas Vindas', corpo: 'Coquitel de Boas Vindas para os participantes do XXI ENMC e IX ECTM', horario: '12:30', sala: '' }];

    dia9 = [ { titulo: 'Sessão Pôsteres', corpo: 'Trabalhos de pesquisa submetidos.', horario: '11h - 12h30', sala:  ''},
    { titulo: 'Coffee Break', corpo: ' ', horario: '15:30 - 16h', sala: ''},
    { titulo: 'Painel 2', corpo: '“Barco Movido a Energia Solar, o Barco Bismarck Solaris”', horario: '15:30 - 16h', sala:  '' },
    { titulo: 'Sessão Pôsteres', corpo: 'Trabalhos de pesquisa submetidos.', horario: '15:30 - 16h', sala:  ''}, {titulo: 'Reunião dos Coordenadores de PPG', corpo: '', horario: '17h - 18h', sala: ''}];

    dia10 = [{ titulo: 'Sessão Pôsteres', corpo: 'Trabalhos de pesquisa submetidos.', horario: '11h - 12h30', sala:  ''},
    { titulo: 'Coffee Break', corpo: ' ', horario: '15:30 - 16h', sala: ''},
    { titulo: 'Sessão Pôsteres', corpo: 'Trabalhos de pesquisa submetidos.', horario: '15:30 - 16h', sala:  ''},
    {titulo: 'Cerimônia de Encerramento', corpo: 'Cerimônia de Encerramento do XXI Encontro Nacional de Modelagem Computacional e IX Encontro de Ciência e Tecnologia dos Materiais', horario: '18h30 - 20h', sala: ''}];

 /// select = ["Opcao1", "Opcao2", "Opcao3", "Opcao4", "Opcao5", "Opcao6"];

  data: string;
  categoria: string;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

    this.carregamento("Iniciando", 3000);
  }

/*  geralPage(): void{
    this.navCtrl.push(GeralPage);
  }

  palestrasMinicursosPage(): void{
    this.navCtrl.push(PalestrasMinicursosPage);
  }

  sessaoTecnicaPage(): void{
    this.navCtrl.push(SessaoTecnicaPage);
  }*/



 
  carregamento( mensagem, tempo ){
    const loader = this.loadingCtrl.create({
      content: mensagem + "...",
      duration: tempo
    });
    loader.present();
  }

  limparLista(event) {
    this.lista = [];
  }

  geral(event){
    if (this.data == "dia8") {
      this.navCtrl.push(GeralPage, {lista: this.dia8});
    }
    else if (this.data == "dia9") {
      this.navCtrl.push(GeralPage, {lista: this.dia9});
    }
    else if (this.data == "dia10") {
      this.navCtrl.push(GeralPage, {lista: this.dia10});
    }
  }

  palestrasEminucursos(event) {
    this.carregamento("Carregando", 2000);
    if (this.data == "dia8") {
      this.navCtrl.push(PalestrasMinicursosPage, {lista: this.palestrasEminicursosD8});
      //this.lista = this.palestrasEminicursosD8;
      
    }
    else if (this.data == "dia9") {
      //this.lista = this.palestrasEminicursosD9;
      this.navCtrl.push(PalestrasMinicursosPage, {lista: this.palestrasEminicursosD9});
    }
    else if (this.data == "dia10") {
      this.navCtrl.push(PalestrasMinicursosPage, {lista: this.palestrasEminicursosD10});
     // this.lista = this.palestrasEminicursosD10;
    }
  }

  

  sessoesTecnicas(event) {    
    this.carregamento("Carregando", 2000);
    if (this.data == "dia8") {
      this.lista = [];
      this.navCtrl.push(SessaoTecnicaPage);
    }
    else if (this.data == "dia9") {
      this.navCtrl.push(SessaoTecnicaPage, {lista: this.sessaotecnicaD9});
      //this.lista = this.sessaotecnicaD9;
    }
    else if (this.data == "dia10") {
      this.navCtrl.push(SessaoTecnicaPage, {lista: this.sessaotecnicaD10});
      //this.lista = this.sessaotecnicaD10;
    }
  }

  selectCategoria($event, cat) {
    console.log("Categoria selecionada: " + cat);
  }
}

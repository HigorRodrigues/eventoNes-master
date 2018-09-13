import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

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
  
    sessaotecnicaD9 = [{titulo: 'Sessão Técnica', corpo: '', horario: '8h - 10h', sala: ''}
    , {titulo: 'Sessão Técnica', corpo: '', horario: '11h - 12h30', sala: ''}
    , {titulo: 'Sessão Técnica', corpo: '', horario: '14h - 14h30', sala: ''}
    , {titulo: 'Sessão Técnica', corpo: '', horario: '17h - 18h', sala: ''}];

    sessaotecnicaD89 = [{titulo: 'Sessão Técnica', corpo: '', horario: '8h - 10h', sala: ''}
    , {titulo: 'Sessão Técnica', corpo: '', horario: '11h - 12h30', sala: ''}
    , {titulo: 'Sessão Técnica', corpo: '', horario: '14h - 14h30', sala: ''}];


  
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

    const loader = this.loadingCtrl.create({
      content: "Iniciando...",
      duration: 3000
    });
    loader.present();
  }

  limparLista(event) {

    this.lista = [];
  }

  palestrasEminucursos(event) {
    if (this.data == "dia8") {
      this.lista = this.dia8;
    }
    else if (this.data == "dia9") {
      this.lista = this.dia9;
    }
    else if (this.data == "dia10") {
      this.lista = this.dia10;
    }
  }

  sessoesTecnicas(event) {

  }

  selectCategoria($event, cat) {
    console.log("Categoria selecionada: " + cat);
    console.log("Data selecionada: " + this.data);
  }
}

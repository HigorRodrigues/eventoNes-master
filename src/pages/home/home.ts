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

    dia8 = [
      {tipo: 'minicurso', titulo: 'Minicurso 1: Introdução ao Uso do MOHID Studio para Estudo Hidrológico', instrutor: 'Jader Lugon Júnior – Professor do IFFluminense', horaInicio: '08:00', horaFim: '10:00'},
      {tipo: 'minicurso', titulo: 'Minicurso 2: SciLab: Introdução e Aplicação', instrutor: 'Fábio Freitas Ferreira – Professor da UFF', horaInicio: '10:00', horaFim: '11:00'},
      {tipo: 'geral', titulo: 'Credenciamento', horaInicio: '11:00', horaFim: '12:30'},
      {tipo: 'geral', titulo: 'Almoço', horaInicio: '12:30', horaFim: '14:00'},
      {tipo: 'geral', titulo: 'Cerimônia de abertura', horaInicio: '14:00', horaFim: '14:30'},
      {tipo: 'plESes', titulo: 'Palestra de Abertura: Desafios da Ciência', instrutor: 'Rodolfo Jardim de Azevedo – Diretor do Instituto de Computação da Unicamp', horaInicio: '14:30', horaFim: '15:30'},
      {tipo: 'geral', titulo: 'Coffee Break - Painel I: As aplicações da Modelagem Computacional na Física', horaInicio: '15:30', horaFim: '16:00'},
      {tipo: 'plESes', titulo: 'Palestra em Modelagem Computacional: Modelagem Computacional do Comportamento dos Tecidos do Corpo Humano', instrutor: 'Aura Conci – Professora da UFF', horaInicio: '16:00', horaFim: '17:00'},
      {tipo: 'plESes', titulo: 'Palestra em Ciência e Tecnologia de Materiais: Modelagem Numérica de Falha de Materiais: O Caso da Propagação Estável de Trincas', instrutor: 'Eduardo Atem de Carvalho – Professor da UENF', horaInicio: '17:00', horaFim: '18:00'},
      {tipo: 'geral', titulo: 'Coquetel de Boas Vindas', horaInicio: '18:30', horaFim: '20:00'},      
    ];

    dia9 = [ 
      {tipo: 'plESes', titulo: 'Palestra em Sessão Técnica: Espectroscopia Fotoacústica: Breve Introdução e Algumas Aplicações', instrutor: 'Noberto Cella – Professor do IPRJ/UERJ', horaInicio: '08:00', horaFim: '10:00'},
      {tipo: 'plESes', titulo: 'Palestra 1: Polo de Inovação do IFFluminense no Modelo Embrapii: como a Modelagem Computacional e a Tecnologia dos Materiais podem contribuir na execução dos projetos', instrutor: 'Vicente de Paulo Santos de Oliveira – Pró-Reitor de Pesquisa, Extensão e Inovação do IFFluminense', horaInicio: '10:00', horaFim: '11:00'},
      {tipo: 'plESes', titulo: 'Sessões técnica e Sessão Pôsteres', horaInicio: '11:00', horaFim: '12:30'},
      {tipo: 'geral', titulo: 'Almoço', horaInicio: '12:30', horaFim: '14:00'},
      {tipo: 'plESes', titulo: 'Sessão Técnica e Palestra de Sessão', horaInicio: '14:00', horaFim: '15:30'},
      {tipo: 'geral', titulo: 'Coffee Break - Painel II: Barco Movido a Energia Solar, o Barco Bismarck Solaris - Sessão Pôsteres', horaInicio: '15:30', horaFim: '16:00'},
      {tipo: 'plESes', titulo: 'Palestra 2: MDO: An Outstanding Methodology For Aircraft Design', instrutor: 'Ana Paula Curty Cuco – Engenheira de Desenvolvimento de Produto da Embraer', horaInicio: '16:00', horaFim: '17:00'},
      {tipo: 'plESes', titulo: 'Sessão Técnica - Reunião dos Coordenadores de PPG', horaInicio: '17:00', horaFim: '18:00'},
      {tipo: 'geral', titulo: '*Jantar por Adesão', horaInicio: '18:30', horaFim: '20:00'}
    ];

    dia10 = [
      {tipo: 'plESes', titulo: 'Palestra em Sessão Técnica: Modelagem (Agro)ambiental: Avanços e Urgências nos Estudos sobre Agrotóxicos', instrutor: 'Mônica Santana Vianna - Pós-Doutoranda do IPRJ/UERJ e João Paulo Torres – Professor da UFRJ', horaInicio: '08:00', horaFim: '10:00'},
      {tipo: 'plESes', titulo: 'Palestra 3: O Algoritmo de Colisão de Partículas (PCA)', instrutor: 'Wagner Figueiredo Sacco – Professor da UFOPA', horaInicio: '10:00', horaFim: '11:00'},
      {tipo: 'plESes', titulo: 'Sessões técnica e Sessão Pôsteres', horaInicio: '11:00', horaFim: '12:30'},
      {tipo: 'geral', titulo: 'Almoço', horaInicio: '12:30', horaFim: '14:00'},
      {tipo: 'plESes', titulo: 'Sessão Técnica e Palestra de Sessão', horaInicio: '14:00', horaFim: '15:30'},
      {tipo: 'geral', titulo: 'Coffee Break - Sessão Pôsteres', horaInicio: '15:30', horaFim: '16:00'},
      {tipo: 'plESes', titulo: 'Palestra 4: Problemas Inversos em Dinâmica e Vibrações: Modelagem e Estimação de Parâmetros', instrutor: 'Leonardo Tavares Stutz – Professor do IPRJ/UERJ', horaInicio: '16:00', horaFim: '17:00'},
      {tipo: 'plESes', titulo: 'Palestra 5: Análise Multicritério', instrutor: 'Helder Gomes Costa – Professor da UFF', horaInicio: '17:00', horaFim: '18:00'},
      {tipo: 'geral', titulo: 'Cerimônia de Encerramento', horaInicio: '18:30', horaFim: '20:00'}
    ];

  data: string;
  categoria: string;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {   
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
 
  limparLista(event) {
    if( this.data == "dia8"){
      this.lista = this.dia8;
    }
    if( this.data == "dia9"){
      this.lista = this.dia9;
    }
    if( this.data == "dia10"){
      this.lista = this.dia10;
    }
  }

  retornoTipo(lista, cat){
    var tipo = [];
    for( var i = 0; i < lista.length; i++ ){      
      if( lista[i].tipo == cat )
        tipo.push(lista[i]);
    }
    return tipo;
  }

  geral(event){
    if (this.data == "dia8") {
      this.navCtrl.push(GeralPage, {lista: this.retornoTipo(this.dia8, 'geral'), dia: "08/10"});
    }
    else if (this.data == "dia9") {
      this.navCtrl.push(GeralPage, {lista: this.retornoTipo(this.dia9, 'geral'), dia: "09/10"});
    }
    else if (this.data == "dia10") {
      this.navCtrl.push(GeralPage, {lista: this.retornoTipo(this.dia10, 'geral'), dia: "10/10"});
    }
  }

  palestrasEminucursos(event) {
    if (this.data == "dia8") {
      this.navCtrl.push(PalestrasMinicursosPage, {lista: this.retornoTipo(this.dia8, 'minicurso'), dia: "08/10"});
    }
    else if (this.data == "dia9") {
      this.navCtrl.push(PalestrasMinicursosPage, {lista: this.retornoTipo(this.dia9, 'minicurso'), dia: "09/10"});
    }
    else if (this.data == "dia10") {
      this.navCtrl.push(PalestrasMinicursosPage, {lista: this.retornoTipo(this.dia10, 'minicurso'), dia: "10/10"});
    }
  }

  //falta implemetar
  sessoesTecnicas(event) {        
    if (this.data == "dia8") {
      this.navCtrl.push(SessaoTecnicaPage, {lista: this.retornoTipo(this.dia8, 'plESes'), dia: "08/10"});
    }
    else if (this.data == "dia9") {
      this.navCtrl.push(SessaoTecnicaPage, {lista: this.retornoTipo(this.dia9, 'plESes'), dia: '09/10'});
    }
    else if (this.data == "dia10") {
      this.navCtrl.push(SessaoTecnicaPage, {lista: this.retornoTipo(this.dia10, 'plESes'), dia: '10/10'});
    }
  }

  emitMessage(){

  }

  selectCategoria($event, cat) {
    console.log("Categoria selecionada: " + cat);
  }
}

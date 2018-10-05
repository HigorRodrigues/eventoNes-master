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
    {horaInicio: "8h15", horaFim: "8h30", titulo: "Multi-Objective Optimization Flower Pollinization Aplicado ao Controle de Vibrações de Rotores Flexíveis"},
    {horaInicio: "8h30", horaFim: "8h45", titulo: "Multi-Objective Optimization of Portfolio Selection Using Evolutionary Algorithms: An Empirical Analysis Involving Return And Skewness"},
    {horaInicio: "8h45", horaFim: "9h", titulo: "Aplicação do Método da Penalização Robusta para Análise de Problemas de Otimização Multi-Objetivos"},
    {horaInicio: "9h", horaFim: "9h15", titulo: "Modelagem Matemática e Solução Exata do Problema de Alocação de Escalas Médicas"},
    {horaInicio: "9h15", horaFim: "9h30", titulo: "Diffusion-Reaction Model With Mono-Objective Optimization in the Aedes Aegypti Mosquito Control"},
    {horaInicio: "9h30", horaFim: "9h45", titulo: "A Scilab Framework to Test Metaheuristics: Last Results"},
    {horaInicio: "9h45", horaFim: "10h", titulo: "Determinação do Quadro de Horários para Psicólogos Usando Programação Linear Inteira"}
  ];

  tituloSessao1Sala2 = [
    {horaInicio: "8h15", horaFim: "8h30", titulo: "Avaliação de Potencial Eólico e Solar com Correlações de Longo Alcance em Séries Temporais em Salvador"},
    {horaInicio: "8h30", horaFim: "8h45", titulo: "Investigando a Eficiência de Mercados por Meio de um Modelo de Previsão de Tendências de Retornos de Ativos"},
    {horaInicio: "8h45", horaFim: "9h", titulo: "Um Estudo do Método Enxame de Partículas para se Determinar Mínimos Globais de Funções Não Lineares"},
    {horaInicio: "9h", horaFim: "9h15", titulo: "Método das Soluções Fundamentais para Reconstrução de Fontes Pontuais em um Problema de Poisson"},
    {horaInicio: "9h15", horaFim: "9h30", titulo: "Performance Study of Variable Short-Time Fourier for Transient Detection in Power Systems"},
    {horaInicio: "9h30", horaFim: "9h45", titulo: "Comparison Between Two Analytical Approaches for the Modeling of Pollutant Dispersion in a Waterbody"},
    {horaInicio: "9h45", horaFim: "10h", titulo: "A New Approach to Solve the Time-Dependent Advection-Difusion Equation Applied to Model Atmospheric Air Pollution Dispersion"}
  ];
  
  tituloSessao1Sala3 = [
    {horaInicio: "8h15", horaFim: "8h30", titulo: "Aplicação da Técnica Adjunta em Problemas de Transporte Multigrupo de Energia do Tipo Fonte-Detector em Geometria Bidimensional Usando um Método Espectronodal"},
    {horaInicio: "8h30", horaFim: "8h45", titulo: "Uma Solução Analítica da Equação de Difusão-Advecção Fracionária Considerando a Lei de Fick Modificada"},
    {horaInicio: "8h45", horaFim: "9h", titulo: "Metodologia Numérica para Solução de Problemas de Biotransferência de Calor"},
    {horaInicio: "9h", horaFim: "9h15", titulo: "Modeling of Elastic Waves Propagation In Stratified Porous Media"},
    {horaInicio: "9h15", horaFim: "9h30", titulo: "Avaliação Numérica de Diferentes Formatos Geométricos Quadrilaterais da Câmara Hidropneumática de Conversores de Energia das Ondas do Mar em Energia Elétrica do Tipo Coluna de Água Oscilante Submetidos à Incidência de Ondas Regulares"},
    {horaInicio: "9h30", horaFim: "9h45", titulo: "Dispositivos Coluna de Água Oscilante Acoplados com Volumes de Entrada Distintos: Um Estudo Numérico da Geometria Usando Design Construtal"},
    {horaInicio: "9h45", horaFim: "10h", titulo: "Análise da Influência dos Parâmetros de Malha e dos Modelos Submalha na Simulação das Grandes Escalas de Escoamentos Turbulentos em Tubos"}
  ];

  tituloSessao1Sala4 = [
    {horaInicio: "8h15", horaFim: "8h30", titulo: "Predição de Ocorrência de Descargas Elétricas Nuvem-Solo Utilizando Previsões do Modelo Numérico Brams"},
    {horaInicio: "8h30", horaFim: "8h45", titulo: "Roteirização do Sink Móvel em RSSF Multi-Hop: Algoritmo Genético para Solução do TSPN"},
    {horaInicio: "8h45", horaFim: "9h", titulo: "Finite Differences Methods Applied to Two-Phase Flow With Gravity in Porous Media"},
    {horaInicio: "9h", horaFim: "9h15", titulo: "Validation of Breakage Model in the Discrete Element Method By Simulation of Single Particle Impact"},
    {horaInicio: "9h15", horaFim: "9h30", titulo: "-"},
    {horaInicio: "9h30", horaFim: "9h45", titulo: "Estudo sobre a Utilização dos Métodos de Luus-Jaakola e PSO em Relação ao Método de Newton para Resolução de Sistemas de Equações Não Lineares"},
    {horaInicio: "9h45", horaFim: "10h", titulo: "Predizendo a Resistência do Concreto à Compressão: Uma Comparação Baseada em Três Métodos de Regressão"}
  ];

  tituloSessao1Audi = [ 
    {horaInicio: "8h15", horaFim: "8h30", titulo: "Um Estudo do Tempo de Primeira Passagem em Redes"},
    {horaInicio: "8h30", horaFim: "8h45", titulo: "Método de Volumes Finitos Aplicados a Problemas de Infiltração da Água no Solo"},
    {horaInicio: "8h45", horaFim: "9h", titulo: "Estudo de Vibrações Mecânicas de Dispositivos Micro- Eletromecânicos Imersos em Meio Difusivo"},
    {horaInicio: "9h", horaFim: "9h15", titulo: "Comparação Estatística entre Duas Variantes do Método de Otimização de Colisão de Partículas"},
    {horaInicio: "9h15", horaFim: "9h30", titulo: "Implementação de um Modelo Hidrológico para Estudo do Transporte de Agrotóxicos na Bacia do Rio São Lourenço em Nova Friburgo"},
    {horaInicio: "9h30", horaFim: "9h45", titulo: "Stabilized Hybrid Mixed Dgfem For The Stokes-Darcy Problem Applied To Miscible Displacements In Heterogeneous Media"},
    {horaInicio: "9h45", horaFim: "10h", titulo: "-"}
  ];

  tituloOral1 = [
    {nome: "Sala 1 – Otimização e Pesquisa Operacional", expanded: false, variavel: this.tituloSessao1Sala1},
    {nome: "Sala 2 – Matemática Aplicada", expanded: false, variavel: this.tituloSessao1Sala2},
    {nome: "Sala 3 – Fenômeno dos Transportes", expanded: false, variavel: this.tituloSessao1Sala3},
    {nome: "Sala 4 – Métodos Computacionais", expanded: false, variavel: this.tituloSessao1Sala4},
    {nome: "Auditório – Matemática Aplicada", expanded: false, variavel: this.tituloSessao1Audi}
  ];        

  tituloSessao2Sala1 = [
    {horaInicio: "11h", horaFim: "11h15", titulo: "Solução Numérica da Equação de Landau-Levich para Altura de Filmes Finos"},
    {horaInicio: "11h15", horaFim: "11h30", titulo: "Programação de Escalas na Agricultura Irrigada Utilizando o Método Particle Swarm Optimization (PSO)"},
    {horaInicio: "11h30", horaFim: "11h45", titulo: "Análise Comparativa sobre o Desempenho do Método de Otimização Alcateia"},
    {horaInicio: "11h45", horaFim: "12h", titulo: "Programação de Petróleo Utilizando Otimização Bilevel em Programação Genética com Inspiração Quântica"},
    {horaInicio: "12h", horaFim: "12h15", titulo: "Uma Aplicação do Método Analytic Hierarchy Process em Jogos de Poker"},
    {horaInicio: "12h15", horaFim: "12h30", titulo: "Modelagem Multicritério para Seleção de ERP"}
  ];
  
  tituloSessao2Sala2 = [
    {horaInicio: "11h", horaFim: "11h15", titulo: "Fintech na Bolsa: Um Estudo de Caso Usando o Método Euler-Maruyama"},
    {horaInicio: "11h15", horaFim: "11h30", titulo: "Simulação das Concentrações do Metano Através de um Mecanismo Cinético Reduzido"},
    {horaInicio: "11h30", horaFim: "11h45", titulo: "Gmres Method Reinitialized With Jacobi and Lumped Preconditioners"},
    {horaInicio: "11h45", horaFim: "12h", titulo: "Comparação entre Método dos Volumes Finitos e o Método das Soluções Fundamentais em um Problema de Difusão Bidimensional"},
    {horaInicio: "12h", horaFim: "12h15", titulo: "Modelagem de Medidor de Vazão Calorimétrico Não Intrusivo por Rede Neural Artificial"},
    {horaInicio: "12h15", horaFim: "12h30", titulo: "Use of Computational Modeling to Simulate Drift of Stranding Cetaceans in Coastal Regions - A Case Study in the Paulista Coastline"}
  ]

  tituloSessao2Sala3 = [ 
    {horaInicio: "11h", horaFim: "11h15", titulo: "Comparison Between Differential Evolution and Simulated Annealing Algorithms Applied to the Constructal Design of Double-T Shaped Cavities"},
    {horaInicio: "11h15", horaFim: "11h30", titulo: "Uma Comparação entre o Método de Volumes Finitos e a Técnica da Transformada Integral Generalizada para a Solução de uma Equação de Difusão Bidimensional"},
    {horaInicio: "11h30", horaFim: "11h45", titulo: "Determinação da Viscosidade Através do Escoamento de Soluções de Sacarose por Tubos Capilares"},
    {horaInicio: "11h45", horaFim: "12h", titulo: "Comparison of Hybrid Finite Element Methods with Discontinuous Galerkin for Mixed Problems"},
    {horaInicio: "12h", horaFim: "12h15", titulo: "Projeto e Análises de Sistemas de Controle em um Problema de Condução de Calor em Placas Termicamente Finas"},
    {horaInicio: "12h15", horaFim: "12h30", titulo: "Modelagem Matemática do Lançamento de Efluentes no Rio Paraíba do Sul na Região da Cidade de Campos dos Goytacazes: Qualidade da Água e Análise de Outorgas Concedidas"}
  ];

  tituloSessao2Sala4 = [
    {horaInicio: "11h", horaFim: "11h15", titulo: "A Numerical Strategy for Speeding-Up Large-Scale Hemodynamic Simulations"},
    {horaInicio: "11h15", horaFim: "11h30", titulo: "Multicriteria Modeling of the Development Indicators of the North Fluminense Municipalities"},
    {horaInicio: "11h30", horaFim: "11h45", titulo: "Método de Elementos Finitos Híbrido Estabilizado P-Adaptativo para o Problema de Darcy"},
    {horaInicio: "11h45", horaFim: "12h", titulo: "Método Computacional para Segmentação Automática do Dossel de Árvores de Mangue a partir de Dados de Perfilamento Tridimensional a Laser"},
    {horaInicio: "12h", horaFim: "12h15", titulo: "Predator-Pray Swarm Interaction in 2D: Numerical Simulation"},
    {horaInicio: "12h15", horaFim: "12h30", titulo: "Modelo de Objetos e Algoritmo de Distribuição de Sensores para Uma Ferramenta Computacional Visando Aplicações em Agricultura de Precisão"}
  ];

  tituloSessao2Audi = [ 
    {horaInicio: "11h", horaFim: "11h15", titulo: "-"},
    {horaInicio: "11h15", horaFim: "11h30", titulo: "Mechanical and Microstructural Caracterization on Commercial and Synthesized By Sol-Gel Method Using Chicken Eggs Shell as Precursor Hydroxyapatite"},
    {horaInicio: "11h30", horaFim: "11h45", titulo: "Mathematical and Computational Modeling for Leprosy’s Dynamics"},
    {horaInicio: "11h45", horaFim: "12h", titulo: "Modelagem Matemática da Imunoterapia com Células Car T"},
    {horaInicio: "12h", horaFim: "12h15", titulo: "Estudo de Diferentes Fracionamentos na Dose da Radioterapia para o Modelo PDGF-Driven Glioblastomas"},
    {horaInicio: "12h15", horaFim: "12h30", titulo: "Study of the Effect of the Project Parameters of Extrusor Nozzles in Bioimpression Using Computational Fluidodynamics"}
  ];

  tituloOral2 = [
    {nome: "Sala 1 – Otimização e Pesquisa Operacional", expanded: false, variavel: this.tituloSessao2Sala1},
    {nome: "Sala 2 – Métodos Computacionais", expanded: false, variavel: this.tituloSessao2Sala2},
    {nome: "Sala 3 – Fenômeno dos Transportes", expanded: false, variavel: this.tituloSessao2Sala3},
    {nome: "Sala 4 – Métodos Computacionais", expanded: false, variavel: this.tituloSessao2Sala4},
    {nome: "Auditório – Aplicações em Engenharia Biomédica", expanded: false, variavel: this.tituloSessao2Audi}
  ];

  tituloSessao3Sala1 = [
    {horaInicio: "14h", horaFim: "14h15", titulo: "Análise Numérica e Experimental do Fator Forma em Juntas de Cisalhamento Simples"},
    {horaInicio: "14h15", horaFim: "14h30", titulo: "Análise de Incerteza em um Sistema de Levitação Acústica de Campo Próximo"},
    {horaInicio: "14h30", horaFim: "14h45", titulo: "Algoritmo Estocástico Aplicado na Solução do Problema das P-Medianas para Localização de Centro de Facilidades"},
    {horaInicio: "14h45", horaFim: "15h", titulo: "Analytical Solution for Correlated Stochastic Process"},
  ];
  
  tituloSessao3Sala2 = [
    {horaInicio: "14h", horaFim: "14h15", titulo: "The Reemergence of Synchronization in the Kuramoto Model"},
    {horaInicio: "14h15", horaFim: "14h30", titulo: "Construction of a Method for Reducing the Number of Association Rules"},
    {horaInicio: "14h30", horaFim: "14h45", titulo: "Computational Modeling of the Penetration of a Fiber in a Confined Dense Granular Medium"},
    {horaInicio: "14h45", horaFim: "15h", titulo: "Iterative Methods for the Solution of Nonlinear Systems and Their Basins of Attraction"},
  ]

  tituloSessao3Sala3 = [ 
    {horaInicio: "14h", horaFim: "14h15", titulo: "Caracterização de Pacientes com Cardiopatias Utilizando Técnicas de Inteligência Computacional"},
    {horaInicio: "14h15", horaFim: "14h30", titulo: "Inverse Problems Solution in Bioheat Transfer for Identification of Skin Melanomas By Luus-Jaakola Method"},
    {horaInicio: "14h30", horaFim: "14h45", titulo: "Enable the Possibility of Deposition on Ss Substrate Coating Powder Mixture Composed of Titanium (TICP) and PTFE Through Flame Thermal Spray Process"},
    {horaInicio: "14h45", horaFim: "15h", titulo: "Síntese e Caracterização Físico-Química de Hidroxiapatita Recoberta com Nanopartícula de Prata (AgNPs) para Regeneração Óssea Guiada"},
  ];

  tituloSessao3Sala4 = [
    {horaInicio: "14h", horaFim: "14h15", titulo: "Métodos Híbridos de Redes Neurais na Previsão de Séries Temporais do Custo da Cesta Básica na Microrregião Ilhéus-Itabuna"},
    {horaInicio: "14h15", horaFim: "14h30", titulo: "Identificação de Danos Estruturais Usando Redes Neurais Artificiais Baseada em um Modelo de Danos Contínuos"},
    {horaInicio: "14h30", horaFim: "14h45", titulo: "Stability Matrix and Boundary Condition Computational Implementation Alternative to the Finite Differences Method for Cartesian Thermal Problems Resolution Envolving Isotropic Materials"},
    {horaInicio: "14h45", horaFim: "15h", titulo: "A Hybrid Finite Element Method Combined With an Adi Method for Solution of Miscible Displacements"},
  ];

  tituloSessao3Audi = [ 
    {horaInicio: "14h", horaFim: "14h15", titulo: "Influência da Rigidez no Deslocamento de Pórtico Espacial Metálico Considerando a Ação do Vento"},
    {horaInicio: "14h15", horaFim: "14h30", titulo: "Análise do Número de Sensores e dados Experimentais na Identificação de Danos Estruturais Via Método de Monte Carlo Hamiltoniano"},
    {horaInicio: "14h30", horaFim: "14h45", titulo: "Lyapunov Stability in a Model that Describes the Radial Movement of a Particle in Acoustic Levitation"},
    {horaInicio: "14h45", horaFim: "15h", titulo: "-"},
  ];

  tituloOral3 = [
    {nome: "Sala 1 – Processos Estocásticos", expanded: false, variavel: this.tituloSessao3Sala1},
    {nome: "Sala 2 – Matemática Aplicada", expanded: false, variavel: this.tituloSessao3Sala2},
    {nome: "Sala 3 – Aplicações em Engenharia Biomédica", expanded: false, variavel: this.tituloSessao3Sala3},
    {nome: "Sala 4 – Métodos Comput. e Computação de Alto Desempenho", expanded: false, variavel: this.tituloSessao3Sala4},
    {nome: "Auditório – Acústica e Vibrações", expanded: false, variavel: this.tituloSessao3Audi}
  ];

  tituloSessao4Sala1 = [
    {horaInicio: "17h", horaFim: "17h15", titulo: "Desenvolvimento de Aparato de Baixo Custo para Medição do Amargor de Cervejas"},
    {horaInicio: "17h15", horaFim: "17h30", titulo: "Difusão em uma Membrana Cilíndrica Imersa em um Campo Radial"},
    {horaInicio: "17h30", horaFim: "17h45", titulo: "Optimal Kernel Parameter Setting for Faults Detection With Stochastic Methods and Data Preprocessing"},
    {horaInicio: "17h45", horaFim: "18h", titulo: "Environmental Analysis of the Maleic Anhydride Production Process"},
    {horaInicio: "18h", horaFim: "18h15", titulo: "Avaliação Comparativa da Ecoeficiência de Processos de Produção de Isopropilamina"}
  ];
  
  tituloSessao4Sala2 = [
    {horaInicio: "17h", horaFim: "17h15", titulo: "Modelagem Computacional e Método Design Construtal Aplicados à Avaliação Geométrica de Placas Retangulares Submetidas a Carregamento Transversal Uniforme com Enrijecedores Trapezoidais"},
    {horaInicio: "17h15", horaFim: "17h30", titulo: "Study of the Predictive Control Approach Applied to a System of Two Tanks in Series"},
    {horaInicio: "17h30", horaFim: "17h45", titulo: "Aplicação do PSO para a Estimação de Parâmetros de uma Estação de Tratamento de Efluentes"},
    {horaInicio: "17h45", horaFim: "18h", titulo: "Avaliação da Eficiência do Atendimento Ambulatorial em uma Unidade Pediátrica em Itabuna- Ba a partir do Estudo de Teoria das Filas e Simulação"},
    {horaInicio: "18h", horaFim: "18h15", titulo: "Simulação da Técnica de Ultrassom Phased Array na Inspeção de Soldas Circunferenciais de Inconel® 625"}
  ]

  tituloSessao4Sala3 = [ 
    {horaInicio: "17h", horaFim: "17h15", titulo: "Integração Energética e Avaliação da Ecoeficiência do Processo de Síntese de Acetato de Vinila"},
    {horaInicio: "17h15", horaFim: "17h30", titulo: "Advisory System for Choice of Ideal Filter in the Chemical Industry (SCEF)"},
    {horaInicio: "17h30", horaFim: "17h45", titulo: "Application of Differential Evolution and PA-JDE in Chemical Engineering Problem"},
    {horaInicio: "17h45", horaFim: "18h", titulo: "Modelagem Computacional de uma Blindagem para Nêutrons, Usando Métodos Determinísticos"},
    {horaInicio: "18h", horaFim: "18h15", titulo: "Simulation and Optimization of Continuous Biodiesel Production from Soybean Oil"}
  ];

  tituloSessao4Sala4 = [
    {horaInicio: "17h", horaFim: "17h15", titulo: "Data Modeling Via Extreme Value Distributions and Approximate Bayesian Computation - ABC"},
    {horaInicio: "17h15", horaFim: "17h30", titulo: "Dynamic Optimization Using Adaptive Grid Refinement With Wavelets Transform in Python"},
    {horaInicio: "17h30", horaFim: "17h45", titulo: "Computational Method H-Infinity Applied to Dexterous Hand Master - Dhm"},
    {horaInicio: "17h45", horaFim: "18h", titulo: "Controle Fuzzy Embarcado em Arduino: Um Estudo de Caso para uma Planta de Nível"},
    {horaInicio: "18h", horaFim: "18h15", titulo: "A Chemical Reaction Optimization Algorithm for Phase Measurement Units Placement"}
  ];

  tituloOral4 = [
    {nome: "Sala 1 – Aplicações em Engenharia Química", expanded: false, variavel: this.tituloSessao4Sala1},
    {nome: "Sala 2 – Modelagem, Simulação e Controle de Processos", expanded: false, variavel: this.tituloSessao4Sala2},
    {nome: "Sala 3 – Aplicações em Engenharia Química", expanded: false, variavel: this.tituloSessao4Sala3},
    {nome: "Sala 4 – Modelagem, Simulação e Controle de Processos", expanded: false, variavel: this.tituloSessao4Sala4},
  ];

  sessao1 = [{nome: "Sessão 1", horario: "8h15 às 10h"}];
  sessao2 = [{nome: "Sessão 2", horario: "11h às 12h30"}];
  sessao3 = [{nome: "Sessão 3", horario: "14h às 15h"}];
  sessao4 = [{nome: "Sessão 4", horario: "17h às 18h15"}];

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
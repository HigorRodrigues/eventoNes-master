import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApresentacaoOralPage } from '../apresentacao-oral/apresentacao-oral';
import { ApresentacaoPosterPage } from '../apresentacao-poster/apresentacao-poster';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
@IonicPage()
@Component({
  selector: 'page-sessao-tecnica',
  templateUrl: 'sessao-tecnica.html',
})
export class SessaoTecnicaPage {
  tipoSessao: string = "orais";
  dia;
  expandHeight: number = 100;
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
    {nome: "Sala 1 – Aplicações em Engenharia Química", diplay: 'none', expanded: false, variavel: this.tituloSessao4Sala1},
    {nome: "Sala 2 – Modelagem, Simulação e Controle de Processos", diplay: 'none', expanded: false, variavel: this.tituloSessao4Sala2},
    {nome: "Sala 3 – Aplicações em Engenharia Química", diplay: 'none', expanded: false, variavel: this.tituloSessao4Sala3},
    {nome: "Sala 4 – Modelagem, Simulação e Controle de Processos", diplay: 'none', expanded: false, variavel: this.tituloSessao4Sala4},
  ];

  sessao1 = [{nome: "Sessão 1", horario: "8h15 às 10h"}];
  sessao2 = [{nome: "Sessão 2", horario: "11h às 12h30"}];
  sessao3 = [{nome: "Sessão 3", horario: "14h às 15h"}];
  sessao4 = [{nome: "Sessão 4", horario: "17h às 18h15"}];

  //sessão pôsteres do dia 09
  pImagens = [
    {poster: "P1", titulo: "Simulação do Processo de Exploração de Amostras em Tomografia Computadorizada Usando o Código X-Ray Monte Carlo"}, 
    {poster: "P2", titulo: "Método Semi-Automático Avançado Para Colorização de Imagens em Tons de Cinza"},
    {poster: "P3", titulo:"Proposta de Metodologia Para Análise do Efeito de Branqueamento do PVDF Através do Processamento de Imagens"},
    {poster: "P4", titulo:"Modelo Computacional de Detecção e Reconhecimento da Linguagem Brasileira de Sinais"}, 
    {poster: "P5", titulo:"Avaliando Diferentes Implementações do Descritor de Cor Dominante"}, 
    {poster: "P6", titulo:"Odometria Visual Para Navegação Autônoma"}, 
    {poster: "P7", titulo:"Proposta de Melhorias em Ferramenta de Detecção de Bordas em Imagens Termográficas de Mamas"}
  ];

  pOtimizacao = [
    {poster: "P8", titulo: "Otimização dos Custos Financeiros de uma Madeireira Utilizando Programação Linear"}, 
    {poster: "P9", titulo: "Análise de Viabilidade Através de Simulação de Conversão Prioritária em um Cruzamento com Uso de Modelagem Computacional"}, 
    {poster: "P10", titulo: "Problemas de Fluxo de Custo Mínimo: Uma Introdução aos Algoritmos de Busacker e Gowen e de Ford e Fulkerson"}, 
    {poster: "P11", titulo: "Caminho Mínimo de Redes Conectadas"}, 
    {poster: "P12", titulo: "Otimização Dimensional e Geométrica de Estruturas Treliçadas para Diversas Concepções Arquitetônicas e Estruturais"}, 
    {poster: "P13", titulo: "O Estado da Arte da Programação Linear na Agromatemática"}, 
    {poster: "P14", titulo: "Método de Análise Por Envoltória de Dados para Avaliação de um Nicho de Televisores no Mercado Nacional"}, 
    {poster: "P15", titulo: "Delineamento de Experimento de Mistura na Otimização de Dosagem de Argamassa de Revestimento"},
    {poster: "P16", titulo: "Estudo de Métodos de Minimização para um Problema Black Box"},
    {poster: "P17", titulo: "Uma Abordagem Comparativa entre Métodos de Categorização e Classificação Aplicados à Satisfação de Clientes com Serviços Bancários"}
  ];

  //modelagem, simulação e controle de processos
  pMSCP = [
    {poster: "P18", titulo: "Modelagem e Simulação de um Módulo Fotovoltaico com Modelica"},
    {poster: "P19", titulo: "Projeto e Análise de Controladores Pid para o Controle de Nível de Líquido em um Tanque em Planta Piloto"},
    {poster: "P20", titulo: "Aplicação do Método da Análise Frequencial para o Projeto de Controladores em uma Planta Piloto"},
    {poster: "P21", titulo: "Simulation and Study of Parametric Sensitivity of a Fixed-Beb Reactorfor Phthalic Anhydride Synthesis"},
    {poster: "P22", titulo: "Implementation of a Meteorological Station Model Programed for Alert and Data Supply in Risk Communities in the Serrana Region of the Stateof Rio de Janeiro"},
    {poster: "P23", titulo: "Análise Envoltória de dados Financeiro-Contábil na Avaliação de Micro e Pequenas Empresas"},
    {poster: "P24", titulo: "Multicriteria Modeling of the 2018 World Cup Using Prométhée Ii Method"},
    {poster: "P25", titulo: "Navegação Automatizada para Embarcação de Pequeno Porte com Uso de Controlador Proporcional-Integral-Derivativo"},
    {poster: "P26", titulo: "Otimização de Layout na Linha de Montagem de uma Indústria Têxtilcom Uso de Simulação Computacional"},
    {poster: "P27", titulo: "Análise Comparativa Entre as Estratégias de Controle Pid e Fuzzy  Aplicadas ao Controle de Velocidade de Máquinas de Indução Trifásicas"},
    {poster: "P28", titulo: "Modelagem e Controle de um Trocador de Calor de Tubos Concêntricos"},
    {poster: "P29", titulo: "Utilização da Estratégia Estritamente Dominante da Teoria dos Jogos para Sintonia Otimizada de Controladores Pi"},
    {poster: "P30", titulo: "Sistema de Captação de Energia Solar e Acumulador de Calor para a Secagem de Amêndoas de Cacau"},
    {poster: "P31", titulo: "Ranqueamento dos Países Emissores de CO2 a Partir da Identidade de Kaya: Modelagem Multicritério do G20"},
    {poster: "P32", titulo: "Controle por Bandas Aplicado ao Problema de Escoamento por Regime de Golfadas"}
  ];

  //MétodosComputacionais
  pMComputacionais1 = [
    {poster: "P33", titulo: "Uma Abordagem Híbrida para a Resolução do Problema do Rodízio de Tripulações"},
    {poster: "P34", titulo: "Robust Kalman Filter for Descriptor Systems in a Data Fusion Scenario"},
    {poster: "P35", titulo: "Uma Implementação Simples por OpenMP de Variante da Busca em Largura"},    
    {poster: "P36", titulo: "Utilização de um Algoritmo de Associação para a Descoberta de Aspectos Relacionados à Repetência Escolar"},
    {poster: "P37", titulo: "Characterization and Analysis of the Urban Road Network of Santarém / Pa Using Betweenness Centrality on Graphs Theory"},
    {poster: "P38", titulo: "Análise de Arquiteturas de Deep Learning Aplicado a um Benchmark de Classificação"},
    {poster: "P39", titulo: "Quality Control and Assurance of Lidar Data"},
    {poster: "P40", titulo: "Análise Topológica de Dados Para Caracterização de Periodicidade em Séries Temporais de Dados Pluviométricos"},
    {poster: "P41", titulo: "Prediction of Solar Radiation By Using Neural Network Model"},
    {poster: "P42", titulo: "Aplicação da Teoria de Redes Para Análise Logística dos Hubports da Cabotagem Brasileira"},
    {poster: "P43", titulo: "Usando o Algoritmo K-Médias Para Classificar o Perfil Empreendedordos Estudantes do Instituto Federal do Norte de Minas Gerais (IFNMG) – Campus Montes Claros"}
  ];

  pMComputacionais2 = [
    {poster: "P45", titulo: "Comparação de Métodos de Aprendizado de Máquina para a Previsão de Curto Prazo de Vazão do Baixo Curso do Rio Paraíba do Sul"}, 
    {poster: "P46", titulo: "Otimização de Tripulações em Ônibus Urbano: Um Método Híbrido Utilizando Programação com Restrições e Algoritmos Genéticos"}, 
    {poster: "P47", titulo: "Análise Temporal dos Homicídios Registrados na Bahia no Período 2012 a 2016: Uma Abordagem com os Modelos Auto-Regressivos de Médias Móveis"},
    {poster: "P48", titulo: "Unit Testing Framework for Finite Element Based Computational Biomechanics Software"},
    {poster: "P49", titulo: "Estudo de Materiais para Aperfeçoamento da Blindagem da Linha de Produção de Iodo-123 para o Acelerador Cyclotron CV-28"},
    {poster: "P50", titulo: "Classificação de Linguagens de Programação Utilizando Técnicas de Machine Learning"},
    {poster: "P51", titulo: "Aplicação do Método AHP para Escolha de Linguagem de Modelagem de Processos de Negócio"}
  ];

  //Materiais Metálicos e Compósitos
  pMMC = [
    {poster: "P52", titulo: "Mechanical Properties of Two Epoxy Adhesives With Different Curing Time"},
    {poster: "P23", titulo: "Compósitos Poliméricos de Resina de Óleo de Mamona Reforçados Com Bagaço de Cana: Propriedades e Características Estruturais"},
    {poster: "P54", titulo: "Análise da Resistência à Punctura do Cobre por Ensaio Padronizado de Ultramicrodureza"},
    {poster: "P55", titulo: "Análise Numérica do Efeito da Geometria na Resistência de um Sistema de Implante Dentário"},
    {poster: "P56", titulo: "Influência dos Parâmetros de Corte nas Tensões Residuais e na Rugosidade no Fresamento de Aço Maraging 300"},
    {poster: "P57", titulo: "Quimiometria Aplicada a Eletroquímica na Determinação da Sensitização do Aço Inoxidavel Superduplex UNS S32750"}
  ];

  pMatematicaAplicada = [
    {poster: "P58", titulo: "Uso do Método de Otimização de Parâmetros para Resolver Equações Diferenciais com Condições de Contorno"},
    {poster: "P59", titulo: "Solução Numérica da Equação de Blasius"},
    {poster: "P60", titulo: "Análise de Desacoplamento das Emissões de CO2 e o Crescimento Econômico"},
    {poster: "P61", titulo: "One-Dimensional Model Applied Temperature Distribution of Grain Stored In a Silo"},
    {poster: "P62", titulo: "Web Semântica em Monitoramento Ambiental: Descrição Formal de Interface de Acesso de Sensores e Atuadores"},
    {poster: "P63", titulo: "Redes Semânticas Complexas de Títulos do Ensino de Física"},
    {poster: "PP1", titulo: "Implementação dos Modelos das Propriedades Termodinâmicas do Ar Úmido e da Radiação Solar no Scilab"},
    {poster: "P64", titulo: "A Time Series Study of Incidence of Dengue in Municipalities of Bahia By Ondaletas Haar"}, 
    {poster: "P65", titulo: "Método Fredholm para Função de Onda Quântica de Podolsky"},
    {poster: "P66", titulo: "Trend Analysis for the Volume of Maximum Precipitations in the Mineira Capital Using Hust Exponent Estimate"},
    {poster: "P67", titulo: "Reological Computational Study During Grain Displacement"},
    {poster: "P68", titulo: "Desenvolvimento de uma Aplicação Visual para Análise de Sinais"},
    {poster: "P69", titulo: "Aplicação da Equação do Calor em uma Chapa Bidimensional Através de Séries de Fourier"},
    {poster: "P70", titulo: "Sistemas Complexos e Ciências das Redes: Redes Semânticas Baseadas em Abstracts e Keywords do Ensino de Física Nacional"},
    {poster: "P71", titulo: "Modelagem Computacional da Previsão de Quebra de Gotas de Óleo em um Hidrociclone"},
    {poster: "P72", titulo: "Otimização dos Gastos de Aquisição de Matérias-Primas para Construção Civil"},
    {poster: "P73", titulo: "Proposta de Método para o Problema de Escalonamento de Projetos com Restrição de Recursos"},
    {poster: "P74", titulo: "Visualização de Dados em Java para um Modelo de Autômato Celularde Crescimento de Tumores"}
];


  //titulo sessão posteres 
  titluloPS1 = [
    {titulo: "Processamento de Imagens", variavel: this.pImagens}, 
    {titulo: "Otimização e Pesquisa Operacional", variavel: this.pOtimizacao},
    {titulo: "Modelagem, Simulação e Controle de Processos", variavel: this.pMSCP},
    {titulo: "Métodos Computacionais", variavel: this.pMComputacionais1},
  ];

  titluloPS2 = [
    {titulo: "Métodos Computacionais",variavel: this.pMComputacionais2},
    {titulo: "Materiais Metálicos e Compósitos", variavel: this.pMMC},
    {titulo: "Matemática Aplicada", variavel: this.pMatematicaAplicada}
  ];

  sessaop1 = [{nome: "Sessão  1", horario: "11h15 às 12h:15"}];
  sessaop2 = [{nome: "Sessão  2", horario: "15:30 às 16h:00"}];

  
  constructor(private screenOrientation: ScreenOrientation, public navCtrl: NavController, public navParams: NavParams) {    
    this.dia = navParams.get('dia'); 
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);  
  }

  apresentarOral( titulo ){
    this.navCtrl.push(ApresentacaoOralPage, {nome: titulo.nome, sessao: titulo.variavel});
  }

  apresentarPoster( titulo ){
    this.navCtrl.push(ApresentacaoPosterPage, {nome: titulo.titulo, poster: titulo.variavel});
  }

}
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApresentacaoOralPage } from '../apresentacao-oral/apresentacao-oral';
import { ApresentacaoPosterPage } from '../apresentacao-poster/apresentacao-poster';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@IonicPage()
@Component({
  selector: 'page-sessao-tecnica2',
  templateUrl: 'sessao-tecnica2.html',
})
export class SessaoTecnica2Page {

  tituloSessao1Sala1 = [
    {horaInicio: "8h15", horaFim: "8h30", titulo: "Implementation of the Eit Reconstruction Technique By Using the Gauss-Newton Minimization in Combination with a Finite Element Method"},
    {horaInicio: "8h30", horaFim: "8h45", titulo: "Adjustment of Dispersion Parameters in the Macaé River with the Simulated Annealing Method"},
    {horaInicio: "8h45", horaFim: "9h00", titulo: "Evolução Diferencial Aplicada ao Problema Inverso da Equação de Antoine para a Acetona e o Etanol"},
    {horaInicio: "9h00", horaFim: "9h15", titulo: "Analysis of the Particle Filter Sir Using the Residue Autocorrelation"},
    {horaInicio: "9h15", horaFim: "9h30", titulo: "Determinação de Parâmetros no Processo de Difusão Anômala Usando Evolução Diferencial"},
    {horaInicio: "9h30", horaFim: "9h45", titulo: "Identificação de Danos Estruturais em uma Viga de EulerBernoulli com o Metamodelo Kriging"},
    {horaInicio: "9h45", horaFim: "10h00", titulo: "5 Estimação de Energia para o Calorímetro de Telhas do Atlas Baseada na Filtragem de Wiener-Hopf"}
  ];

  tituloSessao1Sala2 = [
    {horaInicio: "8h15", horaFim: "8h30", titulo: "Óleo de Semente de Uva em Polipropileno Reciclado. Cinética de Degradação Através do Método Isoconversional Combinado ao Método dos Parâmetros Invariantes (IKP)"},
    {horaInicio: "8h30", horaFim: "8h45", titulo: "Desenvolvimento e Avaliação da Resistência a Compressão Individual de Tijolos Modulares Baseados em Papel Imprensa"},
    {horaInicio: "8h45", horaFim: "9h00", titulo: "Efeito do Hidrogênio nas Tensões Residuais de Tubos de Aço API 5l X65 Fabricado pelo Processo de Soldagem ERW"},
    {horaInicio: "9h00", horaFim: "9h15", titulo: "Aplicação do Método de Dinâmica Molecular para Fenômenos Simples de Auto-Difusão e Adsorção em Materiais Metálicos"},
    {horaInicio: "9h15", horaFim: "9h30", titulo: "Analysis of the Behavior in Fluence of Metal Bonded Joints"},
    {horaInicio: "9h30", horaFim: "9h45", titulo: "Estudo do Desempenho Térmico e Mecânico de Adesivo Epóxi Modificado com Nanotubos de Carbono e Grafeno"},
    {horaInicio: "9h45", horaFim: "10h00", titulo: "Analysis of the Influence of Niobium Pentoxide in a Polypropylene Matrix for Future Development of Cancellous Bones Applied in Dentistry Field"}
  ];  
    
  tituloSessao1Sala3 = [
    {horaInicio: "8h15", horaFim: "8h30", titulo: "Determination of the Manometric Height of the Fluid Distribution Systems of the Tubular Reactor Present in the Dynamic Module of Kinetics and Calculation of Reactors"},
    {horaInicio: "8h30", horaFim: "8h45", titulo: "Método Espectral Determinístico Aplicado a Problemas Globais de Reatores Nucleares em Geometria Unidimensional na Formulação das Ordenadas Discretas"},
    {horaInicio: "8h45", horaFim: "9h00", titulo: "Modelagem Computacional Determinística para Cálculo da Distribuição Neutrônica em Geometria Unidimensional Utilizando o Modelo PN"},
    {horaInicio: "9h00", horaFim: "9h15", titulo: "Desenvolvimento de um Aplicativo Computacional para Solução das Equações Multigrupos de Difusão de Nêutrons em Geometria Unidimensional"},
    {horaInicio: "9h15", horaFim: "9h30", titulo: "Analise da Aceleração por Extrapolação da Fonte de Fissão Considerando a Teoria de Difusão de Nêutrons em Reatores Nucleares"},
    {horaInicio: "9h30", horaFim: "9h45", titulo: "Análise da Performance de Metodologias Numéricas de Solução da Equação de Transporte de Nêutrons em Geometria SLAB na Formulação de Ordenadas Discretas"},
    {horaInicio: "9h45", horaFim: "10h00", titulo: "-"}
  ];  
    
  tituloSessao1Audi =  [
    {horaInicio: "8h15", horaFim: "8h30", titulo: "Uma Proposta de Alinhamento em Imagem Térmica para Possível Utilização na Detecção de Falhas em Equipamentos Elétricos"},
    {horaInicio: "8h30", horaFim: "8h45", titulo: "Um Estudo Comparativo Entre Métodos Iterativos para Resolução de Sistemas Lineares"},
    {horaInicio: "8h45", horaFim: "9h00", titulo: "Simulações Numéricas de Métodos Explícitos para a Equação de Korteweg-De Vries Linearizada"},
    {horaInicio: "9h00", horaFim: "9h15", titulo: "Simulação Termohidráulica Realística de Estados com Perda de Refrigerante no Núcleo do Reator HTR-10 em Operação com Potência Parcial"},
    {horaInicio: "9h15", horaFim: "9h30", titulo: "A Sensibility Analysis in the Structural Reliability of Steam Generator Tubes"},
    {horaInicio: "9h30", horaFim: "9h45", titulo: "Estimação do Crescimento Celular na Fermentação em Estado Sólido para Produção de Celulases"},
    {horaInicio: "9h45", horaFim: "10h00", titulo: "-"}
  ];
    
  //SESSAO 2  
  tituloSessao2Sala1 = [
    {horaInicio: "11h00", horaFim: "11h15", titulo: "Distribuições Condicionais Completas Associadas ao Problema Inverso de Transferência de Calor em Placas Termicamente Finas"},
    {horaInicio: "11h15", horaFim: "11h30", titulo: "Aplicação da Técnica da Transformada Integral Generalizada na Análise Direta e Inversa do Problema Conjugado de Transferência de Calor por Convecção Forçada em Placas Paralelas Via Inferência Bayesiana"}, 
    {horaInicio: "11h30", horaFim: "11h45", titulo: "Comparação entre os Métodos Metropolis-Hastings e Monte Carlo Hamiltoniano na Identificação de Propriedades Termofísicas em Problemas de Condução de Calor"},
    {horaInicio: "11h45", horaFim: "12h00", titulo: "Problema Inverso de Estimativa da Condutância Térmica em Regime Permanente com Formulação Explícita e Regularização Via Truncamento de Autofunções"},
    {horaInicio: "12h00", horaFim: "12h15", titulo: "Two-Dimensional Heat Flux Estimation In Steady State With The Markov Chain Monte Carlo Method, Regularization Techniques And Infrared Thermography"},
    {horaInicio: "12h15", horaFim: "12h30", titulo: "A Topological Derivative-Based Method for an Inverse Potential Problem Modeled By a Modified Helmholtz Equation"},
    {horaInicio: "12h30", horaFim: "12h45", titulo: "Estratégias Adaptativa e de Aceitação Atrasada em Métodos de Monte Carlo com Cadeias de Markov para a Identificação de Danos Estruturais em Vigas"}
  ];
      
  tituloSessao2Sala2 = [
    {horaInicio: "11h00", horaFim: "11h15", titulo: "Avaliação das Propriedades Mecânicas e Térmicas de Compósitos Pp/Sebs/Argila Bentonítica Organofílica"},
    {horaInicio: "11h15", horaFim: "11h30", titulo: "Desenvolvimento e Caracterização de Liga de Nb-Ni Sinterizadas em HPHT Visando Aplicações em Altas Temperaturas"}, 
    {horaInicio: "11h30", horaFim: "11h45", titulo: "Produção e Avaliação do Desempenho Físico-Mecânico de Compósitos Constituídos de Mistura de Celulose, Cimento e Flakes de Pet Aplicados como Material de Construção"},
    {horaInicio: "11h45", horaFim: "12h00", titulo: "Efeitos dos Ciclos de Umedecimento e Secagem nas Propriedades Físicas de Compósitos Constituídos de Cimento, Resíduo de Celulose e Flakes de Pet"},
    {horaInicio: "12h00", horaFim: "12h15", titulo: "Avaliação da Coloração de Blocos de Concreto para Pavimento com Adição de Cinza de Casca de Arroz"},
    {horaInicio: "12h15", horaFim: "12h30", titulo: "Métodos Dinâmicos Aplicados na Avaliação de Compósito de Gesso e Manta de Sisal"},
    {horaInicio: "12h30", horaFim: "12h45", titulo: "Evaluation of Fracturing Energy on Externally Reinforced Beams with Carbon Fiber Composites"}
  ];
      
  tituloSessao2Sala3 = [
    {horaInicio: "11h00", horaFim: "11h15", titulo: "Avaliação da Taxa de Corrosão Uniforme em Cupons de Perda de Massa Submetidos a Diferentes Tratamentos Térmicos"},
    {horaInicio: "11h15", horaFim: "11h30", titulo: "Comportamento das Tensões Residuais no Tratamento Térmico do Aço AISI 4340"}, 
    {horaInicio: "11h30", horaFim: "11h45", titulo: "Estudo das Tensões Residuais e da Rugosidade no Torneamento do Aço SAE 1050 com Ferramentas de Corte Convencional e Wiper"},
    {horaInicio: "11h45", horaFim: "12h00", titulo: "Estudo das Tensões Residuais Geradas no Fresamento de Topo de Aço AISI 4340"},
    {horaInicio: "12h00", horaFim: "12h15", titulo: "Emprego de um Elemento de Indutância distribuída para Modelagem de Impedância Eletroquímica"},
    {horaInicio: "12h15", horaFim: "12h30", titulo: "Influência dos Parâmetros de Corte nas Tensões Residuais Geradas na Usinagem de Aço Inoxidável Duplex 2205"},
    {horaInicio: "12h30", horaFim: "12h45", titulo: "Problema Inverso de Estimativa de Fluxos de Calor com Variação Espacial e Temporal com Regularização por Meio de Markov Random Fields e Modelo Hierárquico para Estimação de Hiperparâmetros"}
  ];
        
  tituloSessao2Audi = [
    {horaInicio: "11h00", horaFim: "11h15", titulo: "-"},
    {horaInicio: "11h15", horaFim: "11h30", titulo: "Caracterização Estrutural de Argilas Bentoníticas para o Desenvolvimento de Nanocompósitos Poliméricos"}, 
    {horaInicio: "11h30", horaFim: "11h45", titulo: "Estudo das Propriedades de Compósitos de Polipropileno Carregados com Pentóxido de Nióbio e Fosfato de Cálcio"},
    {horaInicio: "11h45", horaFim: "12h00", titulo: "Estudo Comparativo das Técnicas de Lente Térmica Modo Otimizado e Espectroscopia de Absorção Convencional para Aplicações em Colóides de Nanopartículas de Ouro"},
    {horaInicio: "12h00", horaFim: "12h15", titulo: "Avaliação Reológica de Tintas Acrílicas Comerciais"},
    {horaInicio: "12h15", horaFim: "12h30", titulo: "Development of Simulator Equipment of Water Hammer"},
    {horaInicio: "12h30", horaFim: "12h45", titulo: "Modelagem para Estimar Valores Faltantes em Séries de Dados Meteorológicos"}
  ];
      
  //SESSAO 3  
  tituloSessao3Sala1 = [
    {horaInicio: "14h00", horaFim: "14h15", titulo: "Transformação Integral e Inferência Bayesiana Aplicadas na Estimativa de Parâmetros em um Modelo de Emissão Instantânea de Sedimentos Não-Coesivos"},
    {horaInicio: "14h15", horaFim: "14h30", titulo: "Estimativa de Fontes Térmicas com Variação Espacial e Temporal Empregando um Método Explícito"},
    {horaInicio: "14h30", horaFim: "14h45", titulo: "Identificação de Danos na Placa de Kirchhoff Via Metamodelo Kriging"},
    {horaInicio: "14h45", horaFim: "15h00", titulo: "Aplicação do Método de Monte Carlo Hamiltoniano na Identificação de Propriedades Térmicas com um Modelo de Capacitância Global Via Inferência Bayesiana"},
  ];
    
  tituloSessao3Sala2 = [
    {horaInicio: "14h00", horaFim: "14h15", titulo: "Produção de Fertilizante de Liberação Lenta de Fósforo Obtido a Partir de Quitina Extraída do Exoesqueleto do Camarão Litopenaeus Vannamei"},
    {horaInicio: "14h15", horaFim: "14h30", titulo: "Aplicação do Método Simulated Annealing na Resolução do Teste de Estabilidade Termodinâmica"},
    {horaInicio: "14h30", horaFim: "14h45", titulo: "Determinação da Conversão Não Ideal de um Reator CSTR em Diferentes Agitações Usando o Modelo de Desvio e Volume Morto"},
    {horaInicio: "14h45", horaFim: "15h00", titulo: "Estudo da Ecoeficiência de Processos de Produção de Acrilonitrila"},
  ];
      
  tituloSessao3Sala3 = [
    {horaInicio: "14h00", horaFim: "14h15", titulo: "Determinação de Meta-Modelos para a Representação do Processo de Desidratação Osmótica da Manga Usando Kriging"},
    {horaInicio: "14h15", horaFim: "14h30", titulo: "Estimação de Parâmetros do Modelo de Clutter para Povoamentos de Eucalyptus"},
    {horaInicio: "14h30", horaFim: "14h45", titulo: "Uso do Modelo de Hodgkin-Huxley para Simulação Numérica de Potencial de Ação"},
    {horaInicio: "14h45", horaFim: "15h00", titulo: "Inverse Analysis of the Diffusive Population Dynamics with Impulsive Culling Sites Via Integral Transforms, Approximation Error Model and Bayesian Inference"},
  ];
      
  tituloSessao3Audi = [
    {horaInicio: "14h00", horaFim: "14h15", titulo: "Computational Model of Zika Virus Infection in Urban Area"},
    {horaInicio: "14h15", horaFim: "14h30", titulo: "Anthropophilie Behavior Study of Wild and Transgenic e Mosquitoes"},
    {horaInicio: "14h30", horaFim: "14h45", titulo: "Desenvolvimento de Bactérias Artificiais Mutantes Streptococcus Agalactiae Híbridas entre Oreochromis Niloticus e Homo Sapiens por Via de Algoritmos Genéticos e MetaHeurísticas"},
    {horaInicio: "14h45", horaFim: "15h00", titulo: "-"},
  ];
  
  //títulos
  tituloOral1 = [
    {nome: "Sala 1 – Problemas Inversos", expanded: false, variavel: this.tituloSessao1Sala1},
    {nome: "Sala 2 – Ciência dos Materiais", expanded: false, variavel: this.tituloSessao1Sala2},
    {nome: "Sala 3 – Aplicações em Engenharia Nuclear", expanded: false, variavel: this.tituloSessao1Sala3},
    {nome: "Auditório – Aplicações em Engenharia Nuclear, Modelagem de Sistemas Biológicos e Métodos Computacionais", expanded: false, variavel: this.tituloSessao1Audi}
  ];
        
  tituloOral2 = [
    {nome: "Sala 1 – Problemas Inversos", expanded: false, variavel: this.tituloSessao2Sala1},
    {nome: "Sala 2 – Materiais Compósitos", expanded: false, variavel: this.tituloSessao2Sala2},
    {nome: "Sala 3 – Materiais Metálicos", expanded: false, variavel: this.tituloSessao2Sala3},
    {nome: "Auditório – Ciência dos Materiais e Métodos Computacionais", expanded: false, variavel: this.tituloSessao2Audi}
  ];
    
  tituloOral3 = [
    {nome: "Sala 1 – Problemas Inversos", expanded: false, variavel: this.tituloSessao3Sala1},
    {nome: "Sala 2 – Aplicações em Engenharia Química", expanded: false, variavel: this.tituloSessao3Sala2},
    {nome: "Sala 3 – Modelagem de Sistemas Biológicos", expanded: false, variavel: this.tituloSessao3Sala3},
    {nome: "Auditório – Modelagem de Sistemas Biológicos", expanded: false, variavel: this.tituloSessao3Audi}
  ];

  sessao1 = [{nome: "Sessão 1", horario: "8h15 às 10h00"}];
  sessao2 = [{nome: "Sessão 2", horario: "11h00 às 12h30"}];
  sessao3 = [{nome: "Sessão 3", horario: "14h00 às 15h00"}];
  

  //posteres

pFenomenosTransporte= [
  {poster: "P75", titulo: "Modelagem Matemática das Curvas de Secagem e a Determinação Experimental do Coeficiente de Difusão para o Mamão Formosa (Carica Papaya L.) em Secador de Leito Fixo"},
  {poster: "P76", titulo: "Anomalous Diffusion Throug Homopolar Membrane: OneDimentional Model"},
  {poster: "P77", titulo: "Modeling and Simulation of Miscellaneous Scan in Porous Media"},
  {poster: "P78", titulo: "Simulação Numérica da Dispersão Gasosa de GLP Utilizando Ansys Cfx Solver"},
  {poster: "P79", titulo: "Análise do Fator de Atrito no Escoamento do Óleo da Amêndoa da Macaúba (Acrocomia Aculeta)"},
  {poster: "P80", titulo: "Excel como Ferramenta na Resolução de Problemas que Envolvem a Taxa de Transferência de Calor em Aletas Tipo Pino"},
  {poster: "P81", titulo: "Aplicação do Software Mohid aa Avaliação de Risco Ambiental aos Corais de Águas Profundas pelo Descomissionamento de Dutos Submarinos na Bacia de Campos"},
  {poster: "P82", titulo: "Experimental Theoretical Analysis of Thermal Flux With Spatial Variation Employing Bayesian Inference and Thermographic Images"},
  {poster: "83", titulo: "Preliminary Theoretical and Experimental Study of the Diffusive Process of Cyclopentane Hydrates Formation From Ice Powder"},
  {poster: "P84", titulo: "Evaluation of the Second Moment in Classic and Bi-Flux Diffusion"}
];


pCienciasMateriais = [
  {poster: "P85", titulo: "Estudo Comparativo de Rigidez Torcional de um Chassi Space Frame do Tipo Baja Sae"},
  {poster: "P86", titulo: "Reciclagem de Vidro de Para-Brisas para Produção de Vitrocerâmica com 15% de Óxido de Nióbio"},
  {poster: "P87", titulo: "Caracterização do Aço Inoxidável 304 Exposto em Ambiente Corrosivo de Caldeira de Recuperação"},
  {poster: "P88", titulo: "Influência do Óxido de Nióbio nas Propriedades de Vitrocerâmicas Produzidas com Resíduo de Vidro"},
  {poster: "P89", titulo: "Development of a Statistical Model to Predict the Dynamic Modulus of Mortar Incorporated With Polyethylene Tereftalate (PET) By Ultrasonic Pulse Velocity (UPV)"},
  {poster: "P90", titulo: "Avaliação da Interferência Individual e Conjunta dos Ânions NO3- e PO43- na Adsorção de SO42- em Hidrotalcita Calcinada"},
  {poster: "P91", titulo: "Classificação de Resíduos do Beneficiamento de Rochas Ornamentais Depositados em Aterros"},
  {poster: "P92", titulo: "Carbeto de Boro (B4C): Revisão Acadêmica Acerca das Propriedades e Principais Características"},
  {poster: "P93", titulo: "Evaluation of Mechanical Properties of Polypropylene/Cassava Bagasse Flour Blend"},
  {poster: "P94", titulo: "Thermal and Mechanical Properties Effects of the Incorporation of Kraft Lignin on Polyethylene Terephthalate"},
  {poster: "P95", titulo: "Efeito da Adição de Óxido de Cério na Distribuição Granulométrica do Batio3"},
  {poster: "P96", titulo: "Textural and Elemental Qualification of The Manganse Ore of Guaçuí (ES)"},
  {poster: "P97", titulo: "Espectroscopia Fotoacústica para Caracterizar Folhas de Mucuna Plantadas em Solos com Adição de Biochar"},
  {poster: "P98", titulo: "Simulação Eletromagnética de Supercondutores pelo Método de Elementos Finitos: Discussão de Alternativas e Revisão de Literatura"},
  {poster: "P99", titulo: "Study of the Response of Energy Dispersive X-Ray Spectrometers Using Monte Carlo Simulations"},
  {poster: "P100", titulo: "Europium Doped Calcium Aluminosilicate Glasses for Photonics Application"},
  {poster: "P101", titulo: "Rheological And Mechanical Properties of Recycled Polypropylene / Virgin Polypropylene Blends"}
];


//Aplicacoes Egenharia Quimica
pAEQ1 = [
  {poster: "P102", titulo: "Construction of Vapour-Liquid Equilibrium Diagrams of Multicomponent Mixtures By Excel Software"},
  {poster: "P103", titulo: "Análise de Isotermas de Adsorção Aplicadas ao Processo de Remoção de SO4-2 em Regime Permanente"},
  {poster: "P104", titulo: "Caracterização Textural e Análise de Solubilidade de Macroelementos Associados a Resíduos de Rochas Ornamentais"},
  {poster: "P105", titulo: "Método Adaptativo de Bixler: Modificação na Linearização do Corretor e Aplicação num Problema de Reator Prf"},
  {poster: "P106", titulo: "Análise de um Dispositivo Microfluidico Usando Ansys Fluent"},
  {poster: "P107", titulo: "Estudo do Processo de Secagem de Arroz com Casca em Leito de Jorro"},
  {poster: "P108", titulo: "Análise da Qualidade da Água Superficial do Rio Mumbaba, na Paraíba, por Lançamento de Efluente"},
  {poster: "P109", titulo: "Controle e Dinâmica de um Trocador de Calor Casco-Tubo Através de Análise em Malha Fechada"},
  {poster: "P110", titulo: "Modelagem Matemática das Curvas de Secagem de Arroz com Casca em Leito de Jorro"},
  {poster: "P111", titulo: "Modelagem e Isolamento Ótimo de um Trocador de Calor Bitubular"},
  {poster: "P112", titulo: " Experimental Design and Response Surface Methodology for Transesterification Reaction of Triglycerides in Biodiesel Production"},
  {poster: "P113", titulo: "Avaliação da Degradação do Corante Índigo Blue Utilizando Fenton Homogêneo a Partir do Delineamento Composto Central Rotacional"},
  {poster: "P114", titulo: "Identificação e Controle em Tanques de Nível Dispostos de Forma Não-Iterativa"},
  {poster: "P115", titulo: "Determinação da Conversão Não Ideal Através do Modelo de Segragação para o Reator Tubular (Pfr)"},
  {poster: "P116", titulo: "Aplicação da Junção da Plataforma Livre Scilab e Arduino para Controle de Ph"},
  {poster: "P117", titulo: "Análise Multivariada de Tempo, Temperatura e Agitação na Transferência de Massa do Cloreto de Sódio em Água"},
  {poster: "P118", titulo: "Uso de Software Livre para Resolução de Problema Envolvendo Destilação por Oscilação de Pressão"}
];

//Aplicações em Engenharia Biomedica
pAEB =[
  {poster: "P119", titulo: "Estudo Comparativo de Técnicas de Limiarização de Histogramas em Imagens de Nódulos de Mamografia"},
  {poster: "P120", titulo: "-"},
  {poster: "P121", titulo: "Estudo Complementar de um Complexo de Coordenação de Cobre e Avaliação da Interação com DNA Humano in Silico"},
  {poster: "P122", titulo: "Sistema de Interação Homem-Máquina Baseado em Eletroencefalografia e Análise do Uso em Diferentes Indivíduos"},
  {poster: "P123", titulo: "Redes Neurais na Classificação de Neoplasias Mamárias"}
];

//Aplicações em Engenharia QUIMICA 2
pAEQ2 = [
  {poster: "P124", titulo: "Simulation and Optimization of Biomass Pyrolysis Process"},
  {poster: "P125", titulo: "Estudo da Cinética e das Isotermas de Adsorção de Nitrato por Hidróxido Duplo Lamelar do Tipo Mg6Al2(CO3)(OH)16.NH2O Calcinado e Não Calcinado"},
  {poster: "P126", titulo: "-"},
  {poster: "P127", titulo: "Hybrid Approach In Total Site Water Networks"},
  {poster: "P128", titulo: "Estudo do Modelo de Dispersão para o Reator Tubular com Recheio (Pbr)"}
];

//Aplicações em Engenharia Nuclear
pAEN = [
  {poster: "P129", titulo: "Uso do Método de Cranck-Nicolson em Cosmologia Quântica"},
  {poster: "P130", titulo: "A Era de Planck do Universo Descrita pelo Pacote Spectral"},
  {poster: "P131", titulo: "Computational Modeling for the Estimation of Interior Uniform Neutron Source Distribution for Driving Subcritical Systems to a Prescribed Power Generation"},
  {poster: "P132", titulo: "Comparing Differente Feed-Forward Perceptron Architectures In Radioactive Particle Tracking Technique"},
  {poster: "PP2", titulo: "Simulação de Curvas de Isodose por Técnica Computacional para Avaliação de Misturas Líquido-Líquido Empregando-se Radiotraçadores"}
];

pAcusticaVibracoes = [
  {poster: "P133", titulo: "Elaboração de Modelo Computacional para o Estudo de Vibrações Livres em uma Ponte de Concreto Armado"},
  {poster: "P134", titulo: "Análise de Pórtico Espacial Sujeito a Ação do Vento com Uso de Modelagem Computacional"},
  {poster: "P135", titulo: "Análise de Vibrações Induzidas pelo Vento em Pórticos Metálicos com Uso de Modelagem Computacional"},
  {poster: "P136", titulo: "Método de Otimização de Parâmetros Aplicado ao Estudo Numérico de Vibrações Mecânicas"},
  {poster: "P137", titulo: "Um Modelo Matemático para a Simulação da Propagação Acústica Submarina e seus Possíveis Impactos nos Mamíferos Marinhos"}
];

pProcessosEstocasticos =  [
  {poster: "P138", titulo: " Comparação entre Métodos Determinísticos e Estocásticos na Resolução de Equações Não Lineares"},
  {poster: "P139", titulo: "Utilização do Método de Otimização Estocástico Evolução Diferencial na Minimização de Funções Não Lineares"}
];

pProblemasInversos = [
  {poster: "P140", titulo: "Análise da Eficiência de Métodos de Estimação de Energia Utilizando um Calorímetro de Altas Energias Operando em Condições de Empilhamento de Sinais"},
  {poster: "P141", titulo: "Inversão Conjunta de Função do Receptor e Dispersão de Ondas de Superfície Aplicado a Estudos da Litosfera."}
];

//Modelagem de Sistemas Biológicos
pMSB = [
  {poster: "P142", titulo: "A New Two-Component Red Blood Cell Modelling Approach"},
  {poster: "P143", titulo: "Ensaios de Interações Moleculares entre a Albumina Bovina Sérica com Glifosato e Metomil (Ingredientes Ativos de Agrotóxicos) para Estudos de Toxicocinética Usando Copasi (Complex Pathway Simulator)"}
];

//Computação de Alto Desempenho
pCAD = [
  {poster: "P144", titulo: "Computação Paralela do Método dos Gradientes Conjugados Aplicado à Resolução de Equações Diferenciais Parciais: Um Estudo Usando OpenMP"}
];

//Titulo Posteres Sessoes
titluloPS1 = [
  {titulo: "Fenômenos do Transporte", expanded: false, variavel: this.pFenomenosTransporte},
  {titulo: "Ciências dos Materiais", expanded: false, variavel: this.pCienciasMateriais},
  {titulo: "Aplicações Engenharia Química", expanded: false, variavel: this.pAEQ1}
];

titluloPS2 = [
  {titulo: "Aplicações Engenharia Biomédica", expanded: false, variavel: this.pAEB},
  {titulo: "Aplicações em Engenharia Química", expanded: false, variavel: this.pAEQ2}, 
  {titulo: "Aplicações em Engenharia Nuclear", expanded: false, variavel: this.pAEN}, 
  {titulo: "Acústica e Vibrações", expanded: false, variavel: this.pAcusticaVibracoes}, 
  {titulo: "Processos Estocásticos", expanded: false, variavel: this.pProcessosEstocasticos}, 
  {titulo: "Problemas Inversos", variavel: this.pProblemasInversos}, 
  {titulo: "Modelagem de Sistemas Biológicos", variavel: this.pMSB}, 
  {titulo: "Computação de Alto Desempenho", expanded: false, variavel: this.pCAD} 
];

  sessaop1 = [{nome: "Sessão 1", horario:"11h15 às 12h:15"}];
  sessaop2 = [{nome: "Sessão 2", horario:"15:30 às 16h:00"}];

  dia: any;
  tipoSessao: string = "orais";
  constructor(private screenOrientation: ScreenOrientation, public navCtrl: NavController, public navParams: NavParams) {
    this.dia = navParams.get('dia');
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);  
  }

  apresentarOral( titulo, sessaoSelecionada ){
    this.navCtrl.push(ApresentacaoOralPage, {nome: titulo.nome, sessao: titulo.variavel, dia: this.dia, sessaoSelecionada: sessaoSelecionada});
  }

  apresentarPoster( titulo, posterSelecionado ){
    this.navCtrl.push(ApresentacaoPosterPage, {nome: titulo.titulo, poster: titulo.variavel, dia: this.dia, posterSelecionado: posterSelecionado});
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SessaoTecnica2Page');
  }

}

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
   {
       enunciado: "ccm é bom??",
       alternativas: [
           {
               texto: "sim, bom ",
               afirmacao: "As escolas cívico-militares (CCM) são frequentemente elogiadas por vários aspectos positivos que oferecem aos estudantes e à comunidade escolar. Alguns desses pontos positivos incluem:"
           },
{
               texto: "não, é ruim ",
               afirmacao: "Resposta 2"
           }
       ]
   },
   {
       enunciado: "pode ir sem uniforme ",
       alternativas: [
           {
               texto: "Positivo",
               afirmacao: "Usar uniformes na escola traz diversos benefícios que vão além da simples padronização visual. Os uniformes ajudam a promover um ambiente escolar mais igualitário, onde todos os alunos são tratados de maneira justa, independentemente de sua condição socioeconômica ou estilo pessoal. "
           },
           {
               texto: "Negativo",
               afirmacao: "Embora o uso de uniformes escolares tenha seus defensores, muitos argumentam que essa prática pode restringir a individualidade dos estudantes. Uniformes podem ser vistos como uma imposição desnecessária de conformidade, limitando a expressão pessoal dos alunos e sua liberdade de escolha."
           }
       ]
   },
   {
       enunciado: "tem que seguir todas as regras do ccm",
       alternativas: [
           {
               texto: "Positivo",
               afirmacao: "As regras estabelecidas nas escolas cívico-militares têm diversos aspectos positivos que contribuem para um ambiente educacional produtivo e harmonioso. Em primeiro lugar, a disciplina rigorosa e a rotina estruturada ajudam a criar um ambiente organizado e focado, promovendo uma atmosfera que facilita o aprendizado e a concentração. Essas regras frequentemente incentivam o desenvolvimento de hábitos saudáveis, como pontualidade, responsabilidade e respeito mútuo, que são valiosos tanto na vida acadêmica quanto na vida pessoal."
           },
           {
               texto: "Negativo",
               afirmacao: "As escolas cívico-militares, apesar de promoverem disciplina e valores como responsabilidade e respeito, também têm sido criticadas por alguns aspectos. Uma das principais críticas é que o ambiente excessivamente rígido pode suprimir a individualidade dos alunos e limitar sua liberdade de expressão. As regras estritas e a ênfase na conformidade podem não ser adequadas para todos os estudantes, especialmente aqueles que têm estilos de aprendizagem ou necessidades diferentes."
           }
       ]
   },
   {
       enunciado: "pode usar brincos no colegio militar",
       alternativas: [
           {
               texto: "Positivo",
               afirmacao: "Geralmente, as escolas cívico-militares têm regulamentos rigorosos em relação ao vestuário e acessórios, incluindo o uso de brincos. Muitas vezes, essas instituições têm políticas que proíbem o uso de brincos visíveis ou quaisquer acessórios que possam ser considerados não conformes com o código de vestimenta estabelecido. Isso pode ser parte de um esforço para manter um ambiente uniforme e focado nos valores de disciplina e aparência profissional que são típicos dessas escolas."
           },
           {
               texto: "Negativo",
               afirmacao: "isso não muda em nada nos estudos."
           }
       ]
   },
   {
       enunciado: "Pergunta 5",
       alternativas: [
           {
               texto: "Positivo",
               afirmacao: "Resposta 1"
           },
           {
               texto: "Negativo",
               afirmacao: "Resposta 2"
           }
       ]
   },
];




let atual = 0;
let perguntaAtual;
let historiaFinal = "";


function mostraPergunta() {
   if (atual >= perguntas.length) {
       mostraResultado();
       return;
   }
   perguntaAtual = perguntas[atual];
   caixaPerguntas.textContent = perguntaAtual.enunciado;
   caixaAlternativas.textContent = "";
   mostraAlternativas();
}


function mostraAlternativas(){
   for(const alternativa of perguntaAtual.alternativas) {
       const botaoAlternativas = document.createElement("button");
       botaoAlternativas.textContent = alternativa.texto;
       botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
       caixaAlternativas.appendChild(botaoAlternativas);
   }
}


function respostaSelecionada(opcaoSelecionada) {
   const afirmacoes = opcaoSelecionada.afirmacao;
   historiaFinal += afirmacoes + " ";
   atual++;
   mostraPergunta();
}


function mostraResultado() {
   caixaPerguntas.textContent = "Em 2049...";
   textoResultado.textContent = historiaFinal;
   caixaAlternativas.textContent = "";
}


mostraPergunta();  







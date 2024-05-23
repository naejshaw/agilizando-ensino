//JavaScript é a linguagem de programação mais popular no mundo
//Um dos principais fatores é a possibilidade de realizar tarefas tanto do front end quanto do back end

//Em um projeto de desenvolvimento web, o JavaScript é responsável pela interatividade do site. Com ele podemos alterar o conteúdo de um elemento HTML, o valor de um atributo do elemento, alterar o estilo, esconder e mostrar elementos.

//Assim como no CSS, podemos inserir um código JS tanto no head, oe mesmo no body, do HTML, dentro da tag <script></script>, quanto em um arquivo externo. Por boas práticas, também iremos gerar um arquivo externo dedicado ao JS e conectá-lo no html como este exemplo <script src="main.js"></script>

//O JavaScript pode apresentar dados de diferentes maneiras:

//    -   Escrevendo em um elemento com a propriedade innerHTML.
//    -   Escrevendo em uma caixa de alerta com window.alert().
//    -   Escrevendo na saída Html com document.write().
//    -   Escrevendo no console do navegador com console.log().
//As duas primeiras são mais direcionadas para o usuário, enquanto as duas últimas para os desenvolvedores
//A propriedade innerHTML do elemento encontrado com document.getElementById() atribui e altera o seu conteúdo
document.getElementById("demo").innerHTML = 5 + 6;

//O método window.alert() gera uma caixa de alerta na tela do usuário para exibir os dados 
window.alert(5 + 6);

//O método document.write() é usualmente utilizado para testes, pois limpa todo conteúdo existente ao ser invocado pela primeira vez no código
document.write(5 + 6);

//Para fins de depuração, podemos usar o método log()  do objeto-global console para exibir dados
console.log(5 + 6);

//Um programa JavaScript é uma lista de instruções de programação. As instruções dentro do JavaScript são compostas por:
//    -   Valores  
//    -   Operadores
//    -   Expressões  
//    -   Palavras Chaves
//    -   Comentários
//As instruções são executadas, uma por uma, na ordem em que são escritas

//A sintaxe do JavaScript é o conjunto de regras, como os programas JavaScript são construídos

//Existem algumas palavras reservadas que identificam uma determinada ação a ser executada. Estas palavras não podem ser utilizadas nas declarações de variáveis ou funções. 
/*Exemplo: */const const = 5; /*não é uma instrução válida
//Conforme uma nova palavra reservada apareça, ela será indicada e explicada a sua ação
//Variáveis: são como caixas para armazenamento de dados. As variáveis JS podem ser declaradas:
    /*-   Automaticamente. Ex.:*/ x = 9;
    /*-   Usando const. Ex.:*/ const x = 9;
    /*-   Usando let. Ex.:*/ let y = 9;
    /*-   Usando var. Ex.:*/ var z = x + y;

//Nos exemplos acima, x, y e z são identificadores das variáveis. Se usarmos este identificador em algum trecho posterior do código, o valor armazenado associado será utilizado no lugar do identificador. Assim, identificadores devem ser únicos.
//Identificadores podem conter letras, números, _ e $. Não devem iniciar com números, podendo iniciar com _ e $. E há uma diferença em casos de letras maiúsculas e minúsculas. Assim, let y e let Y são consideradas duas variáveis distintas. 
//Ainda sobre os exemplos anteriores, podemos observar que os operadores matemáticos são quase todos iguais aos que aprendemos. A diferença está no operador "=". Este sinal significa a atribuição de um valor (à direita) para a variável(à esquerda).
x = x + 5; //Este trecho faz sentido dentro da programação, mas não na álgebra matemática
//Na programação, o trecho acima diz que o novo valor de x será o valor anteriormente armazenado somado a 5

//Tipos de dados
//As variáveis podem armazenar diversos tipos de dados:
//    -   Números
//    -   Strings
//    -   Booleanos
//    -   Arrays
//    -   Objetos
//    -   Funções

//Tipos de variáveis: Escopo
//As variáveis podem ser definidas em dois tipos, no que diz respeito ao escopo, isto é, onde elas podem ser acessadas:
    //-   Block Scope: só podem ser acessadas dentro do escopo onde foram declaradas. As variáveis do tipo let e const são do tipo Block Scope, ou seja, se forem declaradas dentro de {} não podem ser acessadas de fora. Ex.: 
    {
        let a = "Hello";
    }
    console.log(a);//A variável a não pôde ser lida
    //-   Global Scope: podem ser acessadas fora do escopo onde foram declaradas. As variáveis do tipo var são do tipo Global Scope, ou seja, se forem declaradas dentro de {} podem ser acessadas de fora. Ex.: 
    {
        var b = "Goodbye";
    }
    console.log(b);//A variável b pôde ser lida

//As variáveis const são constantes. Assim, não podem ser alteradas
const constante = "valor fixo";
constante = "novo valor";
//As variáveis let e var podem ser alteradas. Porém, além do escopo, possuem outra diferença.
//Enquanto as variáveis var podem ser ser declaradas mais de uma vez, as variáveis let podem ser declaradas apenas uma vez. Ex.:
var teste_01 = "testando";
var teste_01 = "aprovando";
let teste_02 = "testando";
let teste_02 = "aprovando";

//Resumindo:
//let e const tem block scope; var tem global scope.
//let e const não podem ser redeclaradas; var pode ser redeclarada.
//let e const precisam ser declaradas antes do uso; var pode ser declarada após o uso;
const pages = {
    ecmaVsJs: `
        <header>
            <h1>
                ECMAScript vs JavaScript
            </h1>
        </header>

        <h2>Contexto Histórico</h2>

        <p>
            Até se tornar o que é hoje, o Js passou por um longo caminho, algumas heranças históricas nas nomenclaturas podem causar confusão até hoje.
        </p>

        <img src="/assets/javascript-1-brendan-eich.png" alt="brendan-eich">

        <p>
            Criado por Brendan Eich em 1995, o que conhecemos como JavaScript passou por diversos nomes, primeiramente foi batizado como Mocha, por questões de marketing e direitos autorais passou para LiveScript e só então JavaScript.
        </p>

        <p>
            Foi nessa fase que a linguagem explodiu pelo mundo, tanto é que até os dias de hoje é chamada popurlamente por este nome.
        </p>

        <p>
            Eis que surgem dois problemas, o nome JavaScript também já estava patenteado por outra empresa, e outras empresas já estavam criando suas próprias versões, o que tornaria a linguagem despadronizada e confusa nos diferentes navegadores.
        </p>

        <p>
            Numa parceria com a ECMA, uma empresa especializada em padronização de sistemas, formularam finalmente uma linguagem única e regulamentada, o EcmaScript, abrindo um caminho muito mais sedimentado e inteligente para o desenvolvimento da linguagem
        </p>

        <img src="/assets/Ecmascript evoluiton.png" alt="ecmascript evoluiton">

        <h2>Algumas implementações do ES6...</h2>

        <h3>Default Parameters</h3>

        <p>
            Todos os argumentos de uma função por padrão são undefined.
        </p>

        <img src="/assets/retornaQtd.png" alt="retornaQtd">

        <p>
            Isso pode ocasionar em algos bugs, o que torna a declaração deles obrigatória na maioria das vezes.
        </p>

        <img src="/assets/retornaNaN.png" alt="retornaNaN">

        <p>
            O ES6 trouxe a possibilidade de estabelecermos novos parâmetros padrão na função, previnindo bugs e facilitando a vida do balconista.
        </p>

        <img src="/assets/retorna4.png" alt="retorna4">

        <p>
            <em>
                Todas as funções estão declaradas no código desta página, você pode testá-las se quiser
            </em>

            😊
        </p>

        <h3>Template String</h3>

        <p>
            Uma feature que hoje não vivemos sem, mas não existia até 2015 no Js, 
            agora podemos criar uma mistura de expressões e strings de uma forma muito mais semântica e organizada, sem ter que ficar concatenado, abrindo e fechando aspas, e se preocupando com os espaços.
        </p>

        <h4>Antes</h4>

        <img src="/assets/semTemplateString.png" alt="semTemplateString">

        <h4>Depois</h4>

        <img src="/assets/comTemplateString.png" alt="comTemplateString">

        <h3>Destructuring</h3>

        <p>
            Uma forma muito inteligente de extrair dados de arrays e objetos em JavaScript
        </p>

        <img src="/assets/destructuringLebron.png" alt="destructuringLebron">

        <p>
            Veja como fica muito mais fácil trocar o valor de duas variáveis:
        </p>

        <h4>Antes</h4>

        <img src="/assets/semDestructuring.png" alt="semDestructuring">

        <h4>Depois</h4>

        <img src="/assets/comDestructuring.png" alt="comDestructuring">
    `,

    strictMode: `
        <header>
            <h1>
                Strict mode
            </h1>
        </header>

        <p>
            O JavaScript é uma linguagem que tende a evitar crashs, muitos sintaxes erradas ou lógicas equivocadas não impedem o programa de rodar, e o programador só percebe quando estes pequenos problemas viram grandes lá na frente.
        </p>

        <p>
            No Strict Mode, o leitor passa o pente-fino no seu código, lançando no console todos esses erros. Para usá-lo basta adicionar "use strict" na primeira linha do escopo desejado. 
        </p>

        <h4>O que aparecerá no console?</h4>

        <img src="/assets/semStrictMode.png" alt="semStrictMode" class="cursor-pointer" onclick="strictModeDemonstration_1()">

        <p><em>Testa aí</em> 😜 <em>(abra o console do seu navegador e clique na imagem)</em></p>

        <h4>E agora?</h4>

        <img src="/assets/comStrictMode.png" alt="comStrictMode" class="cursor-pointer" onclick="strictModeDemonstration_2()">
    `,

    hoisting: `
        <header>
            <h1>
                Hoisting
            </h1>
        </header>

        <p>
            Numa tradução direta seria "Elevação", tráta-se deste efeito que eu aposto que já era uma pulga atrás da sua orelha
        </p>

        <h4>Por que pode isso?</h4>

        <img src="/assets/podeIsso.png" alt="podeIsso">

        <h4>mas não pode isso?</h4>

        <img src="/assets/naoPodeIsso.png" alt="naoPodeIsso">

        <img src="/assets/ReferenceError.png" alt="ReferenceError">

        <p>
            A impressão que passa é que as declarações de função "sobem" no código quando rodamos, mas na verdade elas ficam exatamente onde estão.
        </p>

        <p>
            O que na realidade acontece é que em JavaScript, as declarações de funções já rodam na compilação do código, antes do programa realmente inicializar. Isso é exclusivo de declaração de funções! O mesmo não vale para const e let.
        </p>
    `,

    variables: `
        <header>
            <h1>
                Tipos de variáveis
            </h1>
        </header>

        <p>
            Por mais que pareçam um pequeno detalhe, os tipos de variáveis funcionam de formas completamente diferentes, e o desconhecimento sobre como cada um funciona pode gerar bugs gigantescos no seu código.
        </p>

        <img src="http://www.constletvar.com/const-vs-let-vs-var.png" alt="var">
        
        <h4>Por que não usar Var?</h4>
        
        <img src="/assets/var.png" alt="var">

        <p>
            É sempre uma boa prática procurar usar o recurso mais restrito e específico possível pra resolver seu problema, tendo assim resultados muito mais previsíveis e controlados.
        </p>
    `,

    for: `
        <header>
            <h1>
                Tipos de for
            </h1>
        </header>
    `
};

const container = document.querySelector('.container');
container.innerHTML = pages.ecmaVsJs

function selectPage(pageOption) {
    document.querySelector('.selected').classList.remove('selected')

    pageOption.classList.add('selected');

    if (pageOption.id === 'ecmaVsJs') {
        container.innerHTML = pages.ecmaVsJs
    };

    if (pageOption.id === 'strictMode') {
        container.innerHTML = pages.strictMode
    };

    if (pageOption.id === 'hoisting') {
        container.innerHTML = pages.hoisting
    };

    if (pageOption.id === 'variables') {
        container.innerHTML = pages.variables
    };

    if (pageOption.id === 'for') {
        container.innerHTML = pages.for
    };
};

function retornaQtd(preco, qtd) {
    return qtd 
};

function precoTotal_1(preco, qtd) {
    return preco * qtd
}

function precoTotal_2(preco, qtd = 1) {
    return preco * qtd
};

function strictModeDemonstration_1() {
    let meuNome = 'luca';

    function trocaPrimeiraLetra(nome) {
        nome[0] = 'j'
    };

    trocaPrimeiraLetra(meuNome)
    console.log(meuNome) //???
};

function strictModeDemonstration_2() {
    let meuNome = 'luca';

    function trocaPrimeiraLetra(nome) {
        "use strict"
        nome[0] = 'j'
    };

    trocaPrimeiraLetra(meuNome)
    console.log(meuNome) //???
};


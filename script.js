const pages = {
    ecmaVsJs: `
        <header>
            <h1>
                ECMAScript vs JavaScript
            </h1>
        </header>
    `,

    strictMode: `
        <header>
            <h1>
                Strict mode
            </h1>
        </header>
    `,

    hoisting: `
        <header>
            <h1>
                Hoisting
            </h1>
        </header>
    `
};

const container = document.querySelector('.container');
//container.innerHTML = pages.ecmaVsJs

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
}

function retornaQtd(preco, qtd) {
    return qtd 
}

console.log(retornaQtd(4)) //undefined

function precoTotal(preco, qtd = 1) {
    return preco * qtd
}

console.log(precoTotal(4)) //4
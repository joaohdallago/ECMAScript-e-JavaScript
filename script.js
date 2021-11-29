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

function precoTotal_1(preco, qtd) {
    return preco * qtd
}

function precoTotal_2(preco, qtd = 1) {
    return preco * qtd
}


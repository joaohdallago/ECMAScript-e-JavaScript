alert('SOMBRA NA NAV E BAIXAR FAVICON')

const pages = {
    ecmaVsJs: `
        <header>
            <h1>
                <em>ECMAScript</em><br>
                e<br>
                <em>JavaScript</em>
            </h1>
        </header>
    `,

    strictMode: `
        <header>
            <h1>
                strict mode
            </h1>
        </header>
    `,

    hoisting: `
        <header>
            <h1>
                hoisting
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
}


